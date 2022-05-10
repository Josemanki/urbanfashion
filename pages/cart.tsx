import { NextPage } from 'next';
import { useDispatch, useSelector } from 'react-redux';
import { CartProductDetails } from '../components/CartProductDetails';
import Layout from '../components/Layout';
import { AppState } from '../redux/store';
import StripeCheckout, { Token } from 'react-stripe-checkout';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import { userRequest } from '../utils/requestMethods';
import { ICartProduct } from '../types/types';
import Link from 'next/link';
import { clearCart } from '../redux/cartSlice';

const KEY = process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY;

const Cart: NextPage = () => {
  const cart = useSelector((state: AppState) => state.cart);
  const currentUser = useSelector((state: AppState) => state.user.currentUser);

  const [stripeToken, setStripeToken] = useState(null);

  const router = useRouter();
  const dispatch = useDispatch();

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
        dispatch(clearCart());
        router.push({ pathname: '/success', query: { orderId: res.data._id } });
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

  const handleClick = () => {
    dispatch(clearCart());
  };

  return (
    <Layout>
      <div className="p-4 md:p-8">
        <h2 className="text-2xl uppercase font-light text-center">Your bag</h2>
        <div className="flex items-center justify-between mt-4">
          <Link href="/">
            <a className="p-3 font-semibold cursor-pointer uppercase border-2 border-neutral-800">Continue shopping</a>
          </Link>
          <div className="hidden md:flex items-center justify-center">
            <span className="cursor-default underline mx-5 md:block">{`Shopping Bag (${cart.products.length})`}</span>
            <Link href={'#'}>
              <a className="underline mx-5 md:block">Your Wishlist</a>
            </Link>
          </div>
          <button
            onClick={handleClick}
            className="p-3 bg-white border-2 border-neutral-800 font-semibold cursor-pointer uppercase"
          >
            Clear cart
          </button>
        </div>
        <div className="flex justify-between flex-col my-8 md:flex-row">
          <div className="flex-[3_3_0%]">
            {cart.products.length > 0 ? (
              cart.products.map((product) => {
                return (
                  <>
                    <CartProductDetails {...product} key={product._id} />
                    <hr />
                  </>
                );
              })
            ) : (
              <div className="h-full flex items-center justify-center py-4 text-neutral-500 text-center">
                You don&apos;t seem to have items in your cart! Let&apos;s go shopping and solve that ;)
              </div>
            )}
          </div>
          <div className="w-full my-8 flex-1 flex flex-col md:ml-8 md:w-auto">
            <div className="flex flex-col p-8 border rounded-md">
              <h2 className="text-3xl uppercase font-thin">Order Summary</h2>
              <div className="flex flex-col gap-4 my-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="whitespace-nowrap">{cart.total} €</span>
                </div>
                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="whitespace-nowrap">5.90 €</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping Discount</span>
                  <span className="whitespace-nowrap">-5.90 €</span>
                </div>
                <div className="flex justify-between text-2xl font-medium">
                  <span>Total</span>
                  <span className="whitespace-nowrap">{cart.total} €</span>
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
      </div>
    </Layout>
  );
};

export default Cart;
