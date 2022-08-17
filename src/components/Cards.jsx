import React from 'react'
import CardsApi from './CardsApi'

function Cards() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-8'>
            {
                CardsApi.map((items, index) => {
                    const { cityName, imageuRL, imageuAlt, temprature, imageuDescription } = items;
                    return (
                        <div key={cityName} className='shadow-lg flex lg:block border rounded-lg overflow-hidden bg-gray-100 2xl:block 2xl:p-4'>
                            <div>
                                <img className='h-full w-48 lg:w-full lg:h-48 object-cover object-center 2xl:h-48 2xl:w-full 2xl:mx-auto 2xl:rounded-r-lg 2xl:rounded-l-lg' src={imageuRL} alt={imageuAlt} />
                            </div>
                            <div className='py-6 px-2 space-y-2 2xl:px-0 2xl:space-y-1'>
                                <h3 className='text-xl uppercase text-indigo-500 2xl:inline-block 2xl:font-bold'>{cityName}</h3>
                                <p className='capitalize text-md 2xl:inline-block 2xl:float-right 2xl:font-bold'></p>
                                <button type="button" class="inline-flex items-center px-5 py-2.5 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                    {temprature}
                                    <span class="inline-flex justify-center items-center ml-2 w-4 h-4 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full">
                                        {index + 1}
                                    </span>
                                </button>
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