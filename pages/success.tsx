import { Check } from '@material-ui/icons';
import { NextPage } from 'next';
import Link from 'next/link';

const Pay: NextPage = () => (
  <div className="h-screen w-screen bg-register-img bg-cover flex items-center justify-center">
    <div className="bg-white flex flex-col justify-center items-center w-4/5 p-10 gap-4 md:w-2/5">
      <div className="w-16 h-16 flex items-center justify-center rounded-full border-2 border-green-500">
        <Check style={{ color: 'rgb(34 197 94', fontSize: '2rem' }} />
      </div>
      <h2 className="text-2xl text-center uppercase">Payment Successful</h2>
      <p className="text-center">Your order is being prepared. Thanks for choosing us!</p>
      <Link href="/">
        <a className="underline">Go to homepage</a>
      </Link>
    </div>
  </div>
);

export default Pay;
