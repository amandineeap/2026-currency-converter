'use server'

import { ConverterFormData } from "@/app/components/ConverterForm"

const getCurrenciesList = async () => {
  try {
    const response = await fetch(`${process.env.API_URL}currencies?api_key=${process.env.API_KEY}`)
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
}

const convert = async ({from, to, amount }: ConverterFormData) => {
  try {
    const params = { from: from, to: to, amount: amount}
    const response = await fetch(`${process.env.API_URL}convert?api_key=${process.env.API_KEY}&` + new URLSearchParams(params).toString())
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`)
    }

    const result = await response.json()
    return result
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.error(error.message)
    }
  }
}

export { getCurrenciesList, convert }