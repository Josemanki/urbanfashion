import { NextPage } from 'next';
import { Head } from 'next/document';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { publicRequest } from '../utils/requestMethods';

const Register: NextPage = () => {
  const router = useRouter();
  const [form, setForm] = useState({});
  const [error, setError] = useState(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setError(null);
    if (form['password'] !== form['passwordConfirm']) {
      setError('Passwords do not match!');
    } else {
      await publicRequest.post('auth/register', form);
      e.target.reset();
      router.push('/login');
    }
  };

  return (
    <>
      <Head>
        <title>Urban Fashion | Register</title>
      </Head>
      <div className="h-screen w-screen bg-register-img bg-cover flex items-center justify-center">
        <div className="bg-white flex flex-col justify-center w-4/5 p-10 gap-4 md:w-2/5">
          <h2 className="text-2xl uppercase">Create an account </h2>
          <span className="text-red-500">{error}</span>
          <form className="flex flex-wrap gap-2" onSubmit={handleRegister}>
            <input
              className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1"
              placeholder="Name"
              name="name"
              type="text"
              onChange={handleChange}
            />
            <input
              className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1"
              placeholder="Last name"
              name="lastName"
              type="text"
              onChange={handleChange}
            />
            <input
              className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1"
              placeholder="Username"
              name="username"
              type="text"
              onChange={handleChange}
            />
            <input
              className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1"
              placeholder="Email"
              name="email"
              type="email"
              onChange={handleChange}
            />
            <input
              className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1"
              placeholder="Password"
              type="password"
              name="password"
              onChange={handleChange}
            />
            <input
              className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1"
              placeholder="Confirm password"
              type="password"
              name="passwordConfirm"
              onChange={handleChange}
            />
            <p className="text-sm mt-4">
              By creating an account I consent to the processing of my personal data in accordance with the{' '}
              <span className="inline font-semibold">privacy policy</span>.
            </p>
            <button type="submit" className="uppercase px-2 py-3 mt-4 bg-teal-500 text-white">
              Create account
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;
