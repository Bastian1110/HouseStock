'use client';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { auth } from '../firebase';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordAgain, setPasswordAgain] = useState('');

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const router = useRouter();
  
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-980">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md transform transition-transform hover:scale-105 hover:shadow-xl">
        <div className="text-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-800">Sign Up</h2>
        </div>
        </div>
        <form className="mt-6">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 text-sm font-semibold">Email address</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-black px-4 py-2 border rounded-lg focus:ring focus:ring-green-500 focus:outline-none"
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
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-500 focus:outline-none text-black"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="passwordAgain" className="block text-gray-600 text-sm font-semibold">Password Again</label>
            <input
              type="password"
              id="passwordAgain"
              name="passwordAgain"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-green-500 focus:outline-none text-black"
              placeholder="Your password again"
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg focus:ring focus:ring-green-500 focus:outline-none transform transition-transform hover:scale-105"
              onClick={() => {
                signup();
                router.push('signin');
              }}
              disabled={!email || !password || !passwordAgain || password !== passwordAgain}
            >
              Sign Up
            </button>
            
          </div>
          <p className="mt-4 text-center text-gray-600 text-sm">
          Go Back <a href="/signin" className="text-green-500 hover:underline">Click Here</a>
        </p>
        </form>
      </div>
    </div>
  );
}