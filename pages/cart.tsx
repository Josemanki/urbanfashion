import { NextPage } from 'next';
import { useSelector } from 'react-redux';
import { CartProductDetails } from '../components/CartProductDetails';
import Layout from '../components/Layout';
import { AppState } from '../redux/store';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { userRequest } from '../utils/requestMethods';
import { ICartProduct } from '../types/types';

const KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

const Cart: NextPage = () => {
  const cart = useSelector((state: AppState) => state.cart);
  const currentUser = useSelector((state: AppState) => state.user.currentUser);

  const [stripeToken, setStripeToken] = useState(null);

  const router = useRouter();

  const onToken = (token: Token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const createOrder = async (payment) => {
      try {
        const res = await userRequest.post('/orders', {
          userId: currentUser._id,
          products: cart.products.map((item: ICartProduct) => ({
            productId: item._id,
            quantity: item.quantity,
          })),
          amount: cart.total,
          address: payment.billing_details.address,
        });
        router.push({ pathname: '/success', query: { orderId: res.data._id } });
        // sessionStorage.removeItem('orderData');
      } catch (err) {
        console.log(err);
      }
    };

    const makeRequest = async () => {
      try {
        const res = await axios.post('api/checkout/payment', {
          tokenId: stripeToken.id,
          amount: cart.total * 100,
        });
        createOrder(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <Layout>
      <div className="p-4 md:p-8">
        <h2 className="text-2xl uppercase font-light text-center">Your bag</h2>
        <div className="flex items-center justify-between mt-4">
          <button className="p-3 font-semibold cursor-pointer uppercase border-2 border-neutral-800">
            Continue shopping
          </button>
          <div className="hidden md:flex items-center justify-center">
            <span className="underline mx-5 md:block">Shopping Bag (2)</span>
            <span className="underline mx-5 md:block">Your Wishlist</span>
          </div>
          <button className="p-3 text-white bg-neutral-800 border-2 border-neutral-800 font-semibold cursor-pointer uppercase">
            Checkout now
          </button>
        </div>
        <div className="flex justify-between my-8 md:flex-row">
          <div className="flex-[3_3_0%]">
            {cart.products.map((product) => {
              return (
                <>
                  <CartProductDetails {...product} />
                  <hr />
                </>
              );
            })}
          </div>
          <div className="w-full p-8 flex-1 flex flex-col max-h-[50vh] rounded-md border md:ml-8 md:w-auto">
            <h2 className="text-3xl uppercase font-thin">Order Summary</h2>
            <div className="flex flex-col gap-4 my-6">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>{cart.total} €</span>
              </div>
              <div className="flex justify-between">
                <span>Estimated Shipping</span>
                <span>5.90 €</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping Discount</span>
                <span>-5.90 €</span>
              </div>
              <div className="flex justify-between text-2xl font-medium">
                <span>Total</span>
                <span>{cart.total} €</span>
              </div>
            </div>
            <StripeCheckout
              name="Urban Fashion"
              image="https://assets.turbologo.com/blog/en/2021/07/07045753/hm-symbol-logo.png"
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}€`}
              amount={cart.total * 100}
              token={onToken}
              stripeKey={KEY}
            >
              <button className="w-full p-4 bg-black text-white font-semibold uppercase">Checkout now</button>
            </StripeCheckout>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Cart;
