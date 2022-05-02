import { NextPage } from 'next';
import Link from 'next/link';

const Login: NextPage = () => (
  <div className="h-screen w-screen bg-login-img bg-cover flex items-center justify-center">
    <div className="bg-white flex flex-col justify-center w-4/5 p-10 gap-4 md:w-2/5">
      <h2 className="text-2xl uppercase">Sign In</h2>
      <form className="flex flex-col gap-2">
        <input className="flex-1 border border-neutral-500 px-2 py-1" placeholder="Username" type="text" />
        <input className="flex-1 border border-neutral-500 px-2 py-1" placeholder="Password" type="password" />
        <button type="submit" className="w-2/5 uppercase px-2 py-3 mt-4 bg-teal-500 text-white">
          Login
        </button>
      </form>
      <div className="flex flex-col gap-2">
        <Link href={'#'}>
          <a className="underline uppercase text-xs">Forgot your password?</a>
        </Link>
        <Link href={'#'}>
          <a className="underline uppercase text-xs">Don't have an account yet? Register now!</a>
        </Link>
      </div>
    </div>
  </div>
);

export default Login;
