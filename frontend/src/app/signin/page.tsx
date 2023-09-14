//https://www.youtube.com/watch?v=ogYhXbtrCJM
"use client";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSignIn = async () => {
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      setError(result.error);
    } else if (result?.ok) {
      router.push("/");
    }
  };

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
          {error && <div className="mb-4 text-red-500 text-sm">{error}</div>}
          <div className="flex items-center justify-between">
            <button
              type="button"
              className="w-full bg-blue-500 hover:bg-blue-600 transition-all duration-300 text-white font-semibold py-2 px-4 rounded-lg focus:ring focus:ring-blue-500 focus:outline-none"
              onClick={handleSignIn}
              disabled={!email || !password}
            >
              Sign in
            </button>
          </div>
        </form>
        <p className="mt-4 text-center text-gray-600 text-sm">
          Not a member?{" "}
          <a href="/signup" className="text-blue-500 hover:underline">
            Sign Up
          </a>
        </p>
        <p className=" text-center text-gray-600 text-sm">
          Forgot Password?{" "}
          <a href="/forgot_password" className="text-blue-500 hover:underline">
            Click Here
          </a>
        </p>
        <div className="mt-6">
          <button
            type="button"
            className="w-full hover:-translate-y-1 hover:scale-105 transition-all duration-300 bg-white  text-black border-2 border-black font-semibold py-2 px-4 rounded-lg focus:ring focus:ring-[#4285F4] focus:outline-none"
            onClick={() => signIn("google")}
          >
            <div className=" flex items-center justify-center text-center align-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  xmlns="http://www.w3.org/2000/svg"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
                <path d="M1 1h22v22H1z" fill="none" />
              </svg>
              <span className="self-center text-md whitespace-nowrap text-black ml-2">
                Signin With Google
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
