"use client";
import { useState } from "react";
import { auth } from "../firebase";
import { sendPasswordResetEmail } from "firebase/auth";
import { useRouter } from "next/navigation";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");

  const resetEmail = () => {
    sendPasswordResetEmail(auth, email);
  };
  const router = useRouter();
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-980">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full transform transition-transform hover:scale-105">
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
        <div className="text-2xl font-bold mt-4">Reset Password</div>
        <div className="mt-6">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 rounded-md border bg-gray-200 text-gray-800 placeholder-gray-400 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none"
          />
        </div>
        <button
          onClick={() => {
            resetEmail();
            router.push("signin");
          }}
          disabled={!email}
          className="mt-6 w-full px-4 py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600 focus:ring focus:ring-blue-500 focus:ring-opacity-50 focus:outline-none transition-colors duration-300"
        >
          Send Email
        </button>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Go back{" "}
          <a href="/signin" className="text-blue-500 hover:underline">
            Click Here
          </a>
        </p>
      </div>
    </div>
  );
}
