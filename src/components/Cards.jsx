import React from 'react'
import CardsApi from './CardsApi'

function Cards() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8'>
            {
                CardsApi.map(items => {
                    const { cityName, imageuRL, imageuAlt, temprature, imageuDescription } = items;
                    return (
                        <div key={cityName} className='shadow-lg flex border rounded-lg overflow-hidden bg-gray-100 2xl:block 2xl:p-4'>
                            <div>
                                <img className='w-48 h-full object-cover object-center 2xl:h-48 2xl:w-full 2xl:mx-auto 2xl:rounded-r-lg 2xl:rounded-l-lg' src={imageuRL} alt={imageuAlt} />
                            </div>
                            <div className='py-6 px-2 space-y-2 2xl:px-0 2xl:space-y-1'>
                                <h3 className='text-xl uppercase text-indigo-500 2xl:inline-block 2xl:font-bold'>{cityName}</h3>
                                <p className='capitalize text-md 2xl:inline-block 2xl:float-right 2xl:font-bold'>{temprature}</p>
                                <p className='leading-5'>{imageuDescription}</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Cards