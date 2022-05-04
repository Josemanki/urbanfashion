import axios from 'axios';
import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { Token } from 'react-stripe-checkout';

const Pay: NextPage = () => {
  const publicKey =
    'pk_test_51KvOV7I8U5SLxOhUho0zmUATcceoRlYDgsvpjHwBsU6wib3echmLSDZx8bwDc5nxWMq5I7tsGr28GKRR2aruAve2005qUnV7P5';

  const [stripeToken, setStripeToken] = useState(null);

  const router = useRouter();

  const onToken = (token: Token) => {
    setStripeToken(token);
  };

  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await axios.post('api/checkout/payment', {
          tokenId: stripeToken.id,
          amount: 2000,
        });
        console.log(res.data);
        router.push('/success');
      } catch (err) {
        console.log(err);
      }
    };
    stripeToken && makeRequest();
  }, [stripeToken]);

  return (
    <div className="h-screen w-screen bg-login-img bg-cover flex items-center justify-center">
      <div className="bg-white flex flex-col justify-center items-center w-4/5 p-10 gap-4 md:w-2/5">
        <h1 className="uppercase text-2xl">Payment</h1>
        <p className="text-center text-sm">
          Press the payment button in order to start a payment - This is made fast and secure thanks to Stripe!
        </p>
        {stripeToken ? (
          <span>Processing. Please wait...</span>
        ) : (
          <StripeCheckout
            name="Urban Fashion"
            image="https://assets.turbologo.com/blog/en/2021/07/07045753/hm-symbol-logo.png"
            billingAddress
            shippingAddress
            description="Your total is 50€"
            amount={5000}
            token={onToken}
            stripeKey={publicKey}
          >
            <button className="px-8 py-4 border-2 border-black font-semibold">Pay now!</button>
          </StripeCheckout>
        )}
      </div>
    </div>
  );
};

export default Pay;
