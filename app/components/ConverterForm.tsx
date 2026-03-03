'use client'

import { ChangeEvent, SyntheticEvent, useState } from 'react';

import SelectInputGroup from './SelectInputGroup'
import { convert } from '../api/currencies';

export interface ConverterFormData {
  from: string
  to: string
  amount: string
}

const ConverterForm = () => {
  const [fromCurrency, setFromCurrency] = useState<string>('');
  const [toCurrency, setToCurrency] = useState<string>('');
  const [amount, setAmount] = useState<string>('');
  const [result, setResult] = useState()

  const handleAmountUpdate = (e: ChangeEvent<HTMLInputElement>) => {
    setAmount(e.target.value)
  }

  const handleSubmit = async (e: SyntheticEvent) => {
    e.preventDefault()

    const result = await convert({from: fromCurrency, to: toCurrency, amount: amount})
    setResult(result.value)
  }
  return <form onSubmit={handleSubmit} className='border border-gray-300 rounded-lg p-8'>
    <SelectInputGroup label="From" name="currencyFrom" onChange={setFromCurrency} />
    <SelectInputGroup label="To" name="currencyTo" onChange={setToCurrency}/>
    <div className='flex flex-col'>
      <label htmlFor='amount'>Amount to convert:</label>
      <input id="amount" type="number" className="border border-gray-100 rounded p-4 mb-4" onChange={handleAmountUpdate}/>
      <button type="submit" className='bg-blue-400 p-2 text-white rounded mb-4'>Convert</button>

      {result && <p className='bg-green-200 p-4 rounded'><span className='text-gray-500'>{amount} {fromCurrency} equals </span><span className='text-lg'>{result} {toCurrency}</span></p>}
    </div>
  </form>
}

export default ConverterForm