import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';
import "tailwindcss";


export default function MainPage() {


  const [date, setDate] = useState(null);
  const [sourceCurrency, setSourceCurrency] = useState("");
  const [targetCurrency, setTargetCurrency] = useState("");
  const [amountInSourceCurrency, setAmountInSourceCurrency] = useState(0);
  const [amountInTargetCurrency, setAmountInTargetCurrency] = useState(0);
  const [currencyNames, setCurrencyNames] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleSubmit = async (e)=> {
    e.preventDefault();
    
    try{
      const response = await axios.get('http://localhost:5000/convert',{
        params:{
          date,
          sourceCurrency,
          targetCurrency,
          amountInSourceCurrency
        },
      });

      setAmountInTargetCurrency(response.data);
      setLoading(false);

    }catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
    const getCurrencyNames = async () => {
      try{
        const response = await axios.get('http://localhost:5000/getAllCurrencies');
        setCurrencyNames(response.data);
      }catch(err){
        console.error(err);
      }
    }
    getCurrencyNames();
  }, []);

  return (
    <div>
      <h1 className='text-5xl font-bold my-5 text-center text-blue-300'>Convert Your Currencies Today</h1>
      <p className='mx-10 pb-5 text-lg opacity-40 text-center text-blue-300'>Welcome to "Convert Your Currencies Today"! This application allows you
        to easily convert currencies based on the latest exchangec rates. Whether
        you're planning a trip, managing your finances, or simply curious about
        the value of your money in different currencies, this tool is here to
        help.
      </p>
      <div className='flex justify-center'>
        <section className='w-1/2'>
          <form onSubmit={handleSubmit}>
            <div className="mb-5">
              <label htmlFor={date} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Date</label>
              <input type="Date" onChange={(e) => setDate(e.target.value)} id={date} name={date} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
            </div>

            <div className="mb-5">
              <label htmlFor={sourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Source Currency</label>
              <select onChange={(e) => setSourceCurrency(e.target.value)} name={sourceCurrency} id={sourceCurrency} value={sourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-white" required>
                <option value="">Select the currency</option>
                {Object.keys(currencyNames).map((currency) => (
                  <option className="p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor={targetCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Target Currency</label>
              <select onChange={(e) => setTargetCurrency(e.target.value)} name={targetCurrency} id={targetCurrency} value={targetCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-400 dark:focus:ring-blue-500 dark:focus:border-white" required>
                <option value="">Select the currency</option>
                {Object.keys(currencyNames).map((currency) => (
                  <option className="p-1" key={currency} value={currency}>
                    {currencyNames[currency]}
                  </option>
                ))}
              </select>
            </div>

            <div className="mb-5">
              <label htmlFor={amountInSourceCurrency} className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Amount in Source Currency</label>
              <input onChange={(e) => setAmountInSourceCurrency(e.target.value)} type="number" step="0.01" min="0" id={amountInSourceCurrency} name={amountInSourceCurrency} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='Amount in Source Currency' required />
            </div>

            <div className='flex justify-center'>
               <button className='text-blue-300 bg-transparent border-2 border-white px-7 py-2 rounded-lg font-bold hover:bg-blue-300 hover:text-black hover:border-black hover:cursor-pointer flex justify-center'>Convert</button>
            </div>
          </form>
        </section>
      </div>
      {!loading ? (
        <section className='my-3 text-blue-300 flex justify-center font-bold text-2xl'>
        {amountInSourceCurrency} {currencyNames[sourceCurrency]} = {amountInTargetCurrency} {currencyNames[targetCurrency]}
        </section>
      ) : null}
      
      
    </div>
  );
}
