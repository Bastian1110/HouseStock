'use client';
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';

export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });
  return (
    <div className="p-8">
      <div>
      <img src={session?.data?.user?.image || "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2015/02/Gato-blanco-y-negro.jpg?fit=2048%2C1152&quality=50&strip=all&ssl=1"} alt="" />
      </div>

      <div className='text-white'>{session?.data?.user?.email }</div>
      <button type="button" className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={() => signOut()}>Logout</button>
      <h1>HOUSE STOCK PAPA</h1>
    </div>
  )
}

Home.requireAuth = true