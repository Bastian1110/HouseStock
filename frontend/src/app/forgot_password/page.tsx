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
    <div className="min-h-screen flex items-center justify-center bg-gray-980">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform transition-transform hover:scale-105">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">Sign In</h2>
        </div>
        <div className="mt-6">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border bg-gray-200 text-gray-800 placeholder-gray-400 focus:ring focus:ring-green-500 focus:ring-opacity-50 focus:outline-none"
          />
        </div>
        <button
          onClick={() => {
            resetEmail();
            router.push('signin');
          }}
          disabled={!email}
          className="mt-6 w-full px-4 py-2 rounded-md bg-green-500 text-white font-semibold hover:bg-green-600 focus:ring focus:ring-green-500 focus:ring-opacity-50 focus:outline-none transition-colors duration-300"
        >
          Send Email
        </button>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Go back <a href="/signin" className="text-green-500 hover:underline">Click Here</a>
        </p>
      </div>
    </div>
  );
  

}