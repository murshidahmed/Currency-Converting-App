import React from 'react'
import "tailwindcss";

export default function MainPage() {
  return (
    <div>
      <h1 className='text-5xl font-bold my-5 text-center text-blue-300'>Convert Your Currencies Today</h1>
      <p className='mx-10 pb-8 text-lg opacity-40 text-center text-blue-300'>Welcome to "Convert Your Currencies Today"! This application allows you
        to easily convert currencies based on the latest exchangec rates. Whether
        you're planning a trip, managing your finances, or simply curious about
        the value of your money in different currencies, this tool is here to
        help.
      </p>
      <div className='flex justify-center'>
        <section className='w-1/2'>
          <form>
            <div className="mb-5">
              <label htmlFor='' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
              <input type="Date" id="date" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@flowbite.co" required />
            </div>

            <div className="mb-5">
              <label htmlFor='' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
              <select name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                <option value="">Select the currency</option>
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor='' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
              <select name="" id="" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" >
                <option value="">Select the currency</option>
              </select>
            </div>
            <div className="mb-5">
              <label htmlFor='' className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
              <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Amount in Source Currency' required />
            </div>
            <div className='flex justify-center'>
               <button type='submit' className='text-blue-300 bg-transparent border-2 border-white px-7 py-2 rounded-lg font-bold hover:bg-blue-300 hover:text-black hover:border-black hover:cursor-pointer flex justify-center'>Convert</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  )
}
