"use client";
import React from "react";
import { HouseCard } from "@/components/house-card/houseCard";
import NavBar from "@/components/nav-bar/NavBar";
import Houses from "@/houses.json";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";
import Footer from "@/components/footer/footer";
export default function Home() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });
  return (
    <div className="w-full bg-black">
      <NavBar />
      <div className="flex flex-wrap justify-center gap-x-10 gap-y-10 my-12">
        {Houses.map((house) => {
          return (
            <HouseCard
              id={house.id}
              img={house.img}
              title={house.Title}
              buy_price={house.Actual_value}
              future_value={house.Future_value}
            />
          );
        })}
      </div>
      <Footer />
    </div>
  );
}

Home.requireAuth = true;
