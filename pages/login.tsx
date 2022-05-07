import { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../redux/apiCalls';
import { AppState } from '../redux/store';

const Login: NextPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const router = useRouter();

  const { isFetching, error, currentUser } = useSelector((state: AppState) => state.user);

  useEffect(() => {
    currentUser && router.push('/');
  }, [currentUser]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className="h-screen w-screen bg-login-img bg-cover flex items-center justify-center">
      <div className="bg-white flex flex-col justify-center w-4/5 p-10 gap-4 md:w-2/5">
        <h2 className="text-2xl uppercase">Sign In</h2>
        {error && <span className="color-red-500">Something went wrong! Check your data.</span>}
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <input
            className="flex-1 border border-neutral-500 px-2 py-1"
            placeholder="Username"
            type="text"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="flex-1 border border-neutral-500 px-2 py-1"
            placeholder="Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            disabled={isFetching}
            type="submit"
            className="w-2/5 uppercase px-2 py-3 mt-4 bg-teal-500 text-white disabled:bg-teal-700 disabled:cursor-default"
          >
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
};

export default Login;
