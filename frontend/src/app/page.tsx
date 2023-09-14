'use client';
import React from "react"
import { HouseCard } from "@/components/house-card/houseCard"
import NavBar from "@/components/nav-bar/NavBar"
import Houses from "@/houses.json"
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
  <div className="w-full">
      <NavBar 
      name={session?.data?.user?.name} 
      email={session?.data?.user?.email} 
      image={session.data?.user?.image} />
    <div className="flex flex-wrap w-full justify-center gap-x-10 gap-y-10">
      {
        Houses.map((house) => {
          return(
              <HouseCard 
              id={house.id}
              img={house.img} 
              title={house.Title} 
              buy_price={house.Actual_value} 
              future_value={house.Future_value} />)
        })
      }
    </div>
  </div>  )
}

Home.requireAuth = true