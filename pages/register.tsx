import { NextPage } from 'next';

const Register: NextPage = () => (
  <div className="h-screen w-screen bg-register-img bg-cover flex items-center justify-center">
    <div className="bg-white flex flex-col justify-center w-4/5 p-10 gap-4 md:w-2/5">
      <h2 className="text-2xl uppercase">Create an account </h2>
      <form className="flex flex-wrap gap-2">
        <input className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1" placeholder="Name" type="text" />
        <input className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1" placeholder="Last name" type="text" />
        <input className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1" placeholder="Username" type="text" />
        <input className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1" placeholder="Email" type="email" />
        <input
          className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1"
          placeholder="Password"
          type="password"
        />
        <input
          className="flex-1 min-w-2/5 border border-neutral-500 px-2 py-1"
          placeholder="Confirm password"
          type="password"
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
);

export default Register;
