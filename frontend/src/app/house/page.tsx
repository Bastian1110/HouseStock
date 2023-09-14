"use client";
import React, { useState, useEffect } from "react";
import NavBar from "@/components/nav-bar/NavBar";
import Houses from "@/houses.json";
import { useSession } from "next-auth/react";
import { redirect, useSearchParams } from "next/navigation";
import { VictoryArea, VictoryChart, VictoryAxis } from "victory";
import { formatCurrency } from "@/utils/formatCurrency";

export default function HousePage() {
  const searchParams = useSearchParams();
  const session = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/signin");
    },
  });

  const id = searchParams?.get("id");
  const house_info = Houses.find((data) =>
    data.id ? data.id.toString() === id : false
  );
  console.log(house_info);

  const something = (
    <div className="bg-white dark:bg-gray-950 w-full">
      <NavBar />
      <div className="pt-6">
        <div className="mx-auto px-12 font-medium text-start align-middle">
          <a href="/" className="flex flex-row gap-4">
            <svg
              className="w-5 h-5 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5H1m0 0 4 4M1 5l4-4"
              />
            </svg>
            Volver
          </a>
        </div>

        <div className="mx-auto mt-6 max-w-lg sm:px-6 lg:grid lg:max-w-4xl lg:grid-cols-1 lg:px-8">
          <div className="grid gap-4">
            <div>
              <img
                className="h-auto max-w-full rounded-lg"
                src={house_info?.img[0]}
                alt="house exter"
              />
            </div>
            <div className="grid grid-cols-5 gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/A-87-FOYER1-scaled.jpg"
                  alt="house interior"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/L-86-LIVING-ROOM-BOOKCASE-scaled.jpg"
                  alt="house interior"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/B-86-FOYER-scaled.jpg"
                  alt="house interior"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/A-87-MASTER-BED-scaled.jpg"
                  alt="house interior"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://meyermayhouse.steelcase.com/wp-content/uploads/2022/08/E-87-DINING-TABLE-BUFFET.jpg"
                  alt="house interior"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto max-w-2xl px-4 pb-16 pt-10 sm:px-6 lg:grid lg:max-w-7xl lg:grid-cols-3 lg:grid-rows-[auto,auto,1fr] lg:gap-x-8 lg:px-8 lg:pb-24 lg:pt-16">
          <div className="lg:col-span-2 lg:border-r lg:border-gray-200 lg:pr-8">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
              {house_info?.Title}
            </h1>
          </div>
          <div className="mt-4 lg:row-span-3 lg:mt-0 flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <p className="text-2xl tracking-tight text-gray-900 font-semibold">
                Valor actual
              </p>
              <p className="text-xl tracking-tight text-gray-900">
                {formatCurrency(house_info?.Actual_value)}
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-2xl tracking-tight text-gray-900 font-semibold">
                Valor futuro
              </p>
              <p className="text-xl tracking-tight text-gray-900">
                {formatCurrency(house_info?.Future_value)}
              </p>
            </div>
            <button
              type="button"
              className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
            >
              Contactar
            </button>
          </div>

          <div className="py-10 lg:col-span-2 lg:col-start-1 lg:border-r lg:border-gray-200 lg:pb-16 lg:pr-8 lg:pt-6">
            <div>
              <h3 className="sr-only">Description</h3>

              <div className="space-y-6">
                <p className="text-base text-gray-900">
                  {house_info?.Descripcion}
                </p>
              </div>
            </div>

            <div className="mt-10">
              <h3 className="text-sm font-medium text-gray-900">Highlights</h3>

              <div className="mt-4">
                {/* <ul role="list" className="list-disc space-y-2 pl-4 text-sm">
                {
                Object.entries(house_info?.Detalles).map(([clave, valor]) => (
                    <li key={clave} className="text-gray-400">
                      <span className="text-gray-600">Clave: {clave}, Valor: {valor}</span>
                    </li>
                  ))}
                </ul> */}
              </div>
            </div>

            <div className="mt-10"></div>
            <div className="mt-10 flex flex-col">
              <h4 className="text-xl font-bold tracking-tight text-gray-900 sm:text-xl">
                Variación anual de precios
              </h4>
              <div className="flex flex-row gap-1">
                <p className="text-sm text-gray-600 font-medium">
                  Comparativa anual
                </p>
                <p className="text-sm flex flex-row text-green-600 font-semibold">
                  +6.4%
                </p>
              </div>
              <VictoryChart>
                <VictoryAxis
                  style={{
                    axis: { stroke: "gray" },
                    tickLabels: { fontSize: 5, fill: "gray" },
                  }}
                />
                <VictoryAxis
                  dependentAxis
                  style={{
                    axis: { stroke: "gray" },
                    tickLabels: { fontSize: 5, fill: "gray" },
                  }}
                />
                <VictoryArea
                  animate={{ duration: 200 }}
                  style={{ data: { fill: "lightblue", stroke: "teal" } }}
                  data={[
                    { x: "Enero", y: 1.2 },
                    { x: "Febrero", y: 1.4 },
                    { x: "Marzo", y: 1.1 },
                    { x: "Abril", y: 1.6 },
                    { x: "Mayo", y: 1.5 },
                    { x: "Junio", y: 1.7 },
                    { x: "Julio", y: 1.6 },
                    { x: "Agosto", y: 1.9 },
                    { x: "Septiembre", y: 1.8 },
                    { x: "Octubre", y: 2.0 },
                    { x: "Noviembre", y: 1.9 },
                    { x: "Diciembre", y: 2.2 },
                  ]}
                />
              </VictoryChart>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return something;
}
