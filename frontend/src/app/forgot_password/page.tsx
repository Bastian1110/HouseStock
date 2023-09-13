'use client';
import { useState } from 'react';
import { auth } from '../firebase';
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from 'next/navigation';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  };
  const router = useRouter();
  return (
    <>
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-30 w-auto"
            src="data:image/jpeg;base64,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"
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Forgot Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-white">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-green-500 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <button
                onClick={() => {
                  resetEmail();
                  router.push('signin')}}
                disabled={!email}
                className="disabled:opacity-40 flex w-full justify-center rounded-md bg-green-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-500"
              >
                Send Forgot Password Email
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}