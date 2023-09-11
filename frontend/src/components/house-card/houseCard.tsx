import React from 'react';
import { formatCurrency } from '@/utils/formatCurrency';

type HouseData = {
    id: number,
    img: string,
    title: string,
    buy_price: number,
    future_value: number,}

/**
 * Renders a card displaying information about a house.
 * 
 * @param house - An object containing information about a house, including its `id`, `img`, `title`, `buy_price`, and `future_value`.
 * @returns A card component displaying information about a house, including its image, title, buy price, and future value. The buy price and future value are formatted as currency.
 */
export function HouseCard(house: HouseData){

    return(
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <img className="rounded-t-lg" src={house.img} alt={house.title} />
            <div className="p-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{house.title}</h5>
                <span className='flex flex-row'>
                    <div className='flex flex-col w-full'>
                        <p className='text-black-700 dark:text-white-400 text-sm'>Compra</p>
                        <p className='text-gray-700 dark:text-gray-400 text-base'>{formatCurrency(house.buy_price)}</p>
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-black-700 dark:text-white-400 text-sm'>Posible venta</p>
                        <p className='text-gray-700 dark:text-gray-400 text-base'>{formatCurrency(house.future_value)}</p>
                    </div>
                </span>
            </div>
        </div>
    )
}