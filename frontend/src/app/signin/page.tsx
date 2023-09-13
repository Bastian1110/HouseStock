//https://www.youtube.com/watch?v=ogYhXbtrCJM
'use client';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

//GOOGLE SIGN IN
import {SessionProvider} from 'next-auth/react'
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env

export default function Signin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-950">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md transform transition-transform hover:scale-105 hover:shadow-xl">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Sign in</h2>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-600 text-sm font-semibold">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
              onClick={() => signIn("credentials", { email, password, redirect: true, callbackUrl: "/" })}
              disabled={!email || !password}
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Not a member? <a href="#" className="text-green-500 hover:underline">Sign Up</a>
        </p>
        <div className="mt-6">
          <button
            type="button"
            className="w-full bg-[#4285F4] hover:bg-[#357AE8] text-white font-semibold py-2 px-4 rounded-lg focus:ring focus:ring-[#4285F4] focus:outline-none"
            onClick={() => signIn("google")}
          >
            Sign in with Google
          </button>
        </div>
      </div>
    </div>
  );
  
  
  
}