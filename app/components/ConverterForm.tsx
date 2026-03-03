'use client'

import SelectInputGroup from './SelectInputGroup'

const ConverterForm = () => {

  const handleSubmit = () => {
    console.log('submit')
  }
  return <form onSubmit={handleSubmit} className='border border-gray-300 rounded-lg p-8'>
    <SelectInputGroup label="From" name="currencyFrom" />
    <SelectInputGroup label="To" name="currencyTo" />
  </form>
}

export default ConverterForm