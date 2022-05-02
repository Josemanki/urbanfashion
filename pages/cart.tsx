import { Add, Remove } from '@material-ui/icons';
import { NextPage } from 'next';
import Link from 'next/link';
import { CartProductDetails } from '../components/CartProductDetails';
import Layout from '../components/Layout';

const Cart: NextPage = () => (
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
      <div className="flex justify-between items-center my-8 md:flex-row">
        <div className="flex-[3_3_0%]">
          <CartProductDetails />
          <hr />
          <CartProductDetails />
          <hr />
          <CartProductDetails />
        </div>
        <div className="w-full p-8 flex-1 flex flex-col max-h-[50vh] rounded-md border md:ml-8 md:w-auto">
          <h2 className="text-3xl uppercase font-thin">Order Summary</h2>
          <div className="flex flex-col gap-4 my-6">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>80 €</span>
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
              <span>80 €</span>
            </div>
          </div>
          <button className="p-4 bg-black text-white font-semibold uppercase">Checkout now</button>
        </div>
      </div>
    </div>
  </Layout>
);

export default Cart;
