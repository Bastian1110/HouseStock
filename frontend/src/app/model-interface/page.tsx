"use client";
import Form from "@/components/model-interface/form";
import NavBar from "@/components/nav-bar/NavBar";
import Footer from "@/components/footer/footer";
import AnimatedNumber from "@/components/misc/AnimatedNumber";
import { useState } from "react";

export default function modelinterface() {
  const signin = (event: any) => {
    event.preventDefault();
    console.log("A");
  };
  const [value, setValue] = useState(0);

  return (
    <>
      <NavBar />
      <h2 className="text-4xl font-bold mx-10 mt-6">
        Real State Value Prediction
      </h2>
      <div className="grid grid-cols-2">
        <Form setPrice={setValue} />
        <div className="text-white">
          <h2 className="text-4xl my-8">Estimated Value :</h2>
          <AnimatedNumber value={value} />
          <button className="py-2 px-10  border-blue-500 text-white font-bold bg-blue-500 rounded-lg">
            Save
          </button>
          <button className="py-2 px-10 mx-2  border-blue-500 text-white font-bold border-2 rounded-lg">
            Re-evaluate
          </button>
          <button className="py-2 px-10 mx-2  border-white text-white font-bold border-2 rounded-lg">
            Publish
          </button>
        </div>
      </div>
    </>
  );
}
