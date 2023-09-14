'use client';
import React from "react";
import NavBar from "@/components/nav-bar/NavBar";
import { signOut, useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { VictoryArea, VictoryChart, VictoryAxis  } from 'victory';

const product = {
  name: 'Basic Tee 6-Pack',
  price: '$192',
  images: [
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-secondary-product-shot.jpg',
      alt: 'Two each of gray, white, and black shirts laying flat.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-01.jpg',
      alt: 'Model wearing plain black basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-tertiary-product-shot-02.jpg',
      alt: 'Model wearing plain gray basic tee.',
    },
    {
      src: 'https://tailwindui.com/img/ecommerce-images/product-page-02-featured-product-shot.jpg',
      alt: 'Model wearing plain white basic tee.',
    },
  ],
  colors: [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Gray', class: 'bg-gray-200', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ],
  sizes: [
    { name: 'XXS', inStock: false },
    { name: 'XS', inStock: true },
    { name: 'S', inStock: true },
    { name: 'M', inStock: true },
    { name: 'L', inStock: true },
    { name: 'XL', inStock: true },
    { name: '2XL', inStock: true },
    { name: '3XL', inStock: true },
  ],
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
  highlights: [
    'Hand cut and sewn locally',
    'Dyed with our proprietary colors',
    'Pre-washed & pre-shrunk',
    'Ultra-soft 100% cotton',
  ],
  details:
    'The 6-Pack includes two black, two white, and two heather gray Basic Tees. Sign up for our subscription service and be the first to get new, exciting colors, like our upcoming "Charcoal Gray" limited release.',
}
export default function HousePage() {
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect('/signin');
    },
  });

  const something = (
    <div className="bg-white dark:bg-gray-950 w-full">
        <NavBar
          name={session?.data?.user?.name} 
          email={session?.data?.user?.email} 
          image={session.data?.user?.image}/>
      <div className="pt-6">
        <div className="mx-auto px-12 font-medium text-start align-middle">
            <a href="/" className="flex flex-row gap-4">
            <svg className="w-5 h-5 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
            </svg>
                Volver</a>
        </div>
        {/* Image gallery */}
        <div className="mx-auto mt-6 max-w-lg sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-1 lg:px-8">
            <div className="grid gap-4">
                    <div>
                        <img className="h-auto max-w-full rounded-lg" src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/A-87-Ext_Logan1.jpg" alt="house exter"/>
                    </div>
                    <div className="grid grid-cols-5 gap-4">
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/A-87-FOYER1-scaled.jpg" alt="house interior"/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/L-86-LIVING-ROOM-BOOKCASE-scaled.jpg" alt="house interior"/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/B-86-FOYER-scaled.jpg" alt="house interior"/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/A-87-MASTER-BED-scaled.jpg" alt="house interior"/>
                        </div>
                        <div>
                            <img className="h-auto max-w-full rounded-lg" src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/E-87-DINING-TABLE-BUFFET.jpg" alt="house interior"/>
                        </div>
                    </div>
            </div>
        </div>
        {/* Product info */}
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">House 1</h1>
        </div>
          {/* Options */}
          <div className="mt-4 lg:row-span-3 lg:mt-0 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
                <p className="text-2xl tracking-tight text-gray-900 font-semibold">Valor actual</p>
                <p className="text-xl tracking-tight text-gray-900">{product.price}</p>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-2xl tracking-tight text-gray-900 font-semibold">Valor futuro</p>
                <p className="text-xl tracking-tight text-gray-900">$200</p>
            </div>
            <button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Contactar</button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            {/* Description and details */}
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">{product.description}</p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                  {product.highlights.map((highlight) => (
                    <li key={highlight} className="text-gray-400">
                      <span className="text-gray-600">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-sm font-medium text-gray-900">Details</h2>

              <div className="mt-4 space-y-6">
                <p className="text-sm text-gray-600">{product.details}</p>
              </div>
            </div>
            <div className="mt-10 flex flex-col">
                <h4 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
                    Variación anual de precios</h4>
                <div className="flex flex-row gap-1">
                    <p className="text-sm text-gray-600 font-medium">Comparativa anual</p>
                    <p className="text-sm flex flex-row text-green-600 font-semibold">+6.4%</p>
                </div>
            <VictoryChart>
                <VictoryAxis
                style={{
                    axis: { stroke: 'gray' },
                    tickLabels: {fontSize: 5, fill: 'gray'},
                  }}/>
                <VictoryAxis dependentAxis
                style={{
                    axis: { stroke: 'gray' },
                    tickLabels: { fontSize: 5, fill: 'gray' },
                  }} />
                <VictoryArea
                    animate={{ duration: 200 }}
                    style={{data: { fill: 'lightblue', stroke: 'teal' }}} 

                    data={[
                        { x: 'Enero', y: 1.2 },
                        { x: 'Febrero', y: 1.4 },
                        { x: 'Marzo', y: 1.1 },
                        { x: 'Abril', y: 1.6 },
                        { x: 'Mayo', y: 1.5 },
                        { x: 'Junio', y: 1.7 },
                        { x: 'Julio', y: 1.6 },
                        { x: 'Agosto', y: 1.9 },
                        { x: 'Septiembre', y: 1.8 },
                        { x: 'Octubre', y: 2.0 },
                        { x: 'Noviembre', y: 1.9 },
                        { x: 'Diciembre', y: 2.2 },
                    ]}
                />
                </VictoryChart>
            </div>
          </div>
        </div>
      </div>  
    </div>
  )

  return something;
}
