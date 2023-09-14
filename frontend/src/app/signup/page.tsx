"use client";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { auth } from "../firebase";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordAgain, setPasswordAgain] = useState("");

  const signup = () => {
    createUserWithEmailAndPassword(auth, email, password);
  };
  const router = useRouter();

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-980">
      <div className="bg-white rounded-lg shadow-md p-8 w-full max-w-md transform transition-transform ">
        <div className="flex items-center justify-center text-center align-middle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-11 h-11 text-blue-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
            />
          </svg>

          <span className="self-center text-4xl font-bold whitespace-nowrap text-black ml-2">
            HouseStock
          </span>
        </div>
        <div className="text-2xl font-bold mt-4">Sign Up</div>
        <form className="mt-6">
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-600 text-sm font-semibold"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full text-black px-4 py-2 border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              placeholder="Your email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 text-sm font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none text-black"
              placeholder="Your password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="passwordAgain"
              className="block text-gray-600 text-sm font-semibold"
            >
              Password Again
            </label>
            <input
              type="password"
              id="passwordAgain"
              name="passwordAgain"
              className="w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-500 focus:outline-none text-black"
              placeholder="Your password again"
              onChange={(e) => setPasswordAgain(e.target.value)}
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none transform transition-transform hover:scale-105"
              onClick={() => {
                signup();
                router.push("signin");
              }}
              disabled={
                !email ||
                !password ||
                !passwordAgain ||
                password !== passwordAgain
              }
            >
              Sign Up
            </button>
          </div>
          <p className="mt-4 text-center text-gray-600 text-sm">
            Go Back{" "}
            <a href="/signin" className="text-blue-500 hover:underline">
              Click Here
            </a>
          </p>
        </form>
      </div>
    </div>
  );
}
