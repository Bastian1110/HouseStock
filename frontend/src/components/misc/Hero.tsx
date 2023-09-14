import Link from "next/link";

export default function Hero() {
  return (
    <div className="bg-gradient-to-tl from-indigo-900 to-blue-600 h-[60vh] flex flex-col justify-center items-center text-black">
      <h1 className="text-white text-5xl mb-4 font-bold">
        Find Out What Real State is Really Worth in Seconds!
      </h1>
      <p className="text-white text-xl mb-4">
        House Stock has developed a stateof-the-art machine learning algorithm
        to predict capital gain, precisely in a matter of seconds.
      </p>
      <Link
        href={"/model-interface"}
        className="bg-white text-black hover:scale-110 tranisiton-all text-2xl font-semibold px-6 py-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300 flex items-center align-middle"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 inline-block"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5"
          />
        </svg>
        <span className="ml-2">Get Started Here!</span>
      </Link>
    </div>
  );
}
