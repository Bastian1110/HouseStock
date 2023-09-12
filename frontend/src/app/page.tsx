import React from "react"
import { HouseCard } from "@/components/house-card/houseCard"
import NavBar from "@/components/nav-bar/NavBar"
export default function Home() {

  const houseData = {
    id: 1,
    img: "https://www.bhg.com/thmb/H9VV9JNnKl-H1faFXnPlQfNprYw=/1799x0/filters:no_upscale():strip_icc()/white-modern-house-curved-patio-archway-c0a4a3b3-aa51b24d14d0464ea15d36e05aa85ac9.jpg", 
    title: "House 1",
    buy_price: 100000,
    future_value: 200000,
  } 
  return (
  <>
    <div>
      <NavBar />
    </div>
    
    <div className="flex flex-wrap">
      <HouseCard {...houseData} />
    </div>
  </>  )
}
