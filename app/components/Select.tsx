import { ChangeEvent, useEffect, useState } from "react"
import { getCurrenciesList } from "../api/currencies"

type Currency = {
  id: number,
  name: string,
  code: string,
  short_code: string,
}


interface SelectProps {
  label: string
  name: string
  onChange: (value: string) => void
}

const Select = ({label, name, onChange}: SelectProps) => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currencies, setCurrencies] = useState<Currency[]>([])

  const handleChange = (e: ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value)
  }

  const sortResults = (results: Currency[]) => {
    results.sort( (a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    });

    return results
  }

  useEffect(() => {
    getCurrenciesList().then( (currencies: Currency[]) => {
      setLoading(true)

      const results: Currency[] = []
      for (const c in currencies) {
        results.push({
          id: currencies[c].id,
          name: currencies[c].name,
          code: currencies[c].code,
          short_code: currencies[c].short_code
        })
      }
      setCurrencies(sortResults(results))
      setLoading(false)

    }).catch(error => {
      setError(error)
      setLoading(false)
    })
  }, [])
  
  return <div>
    {loading && <p>{loading}</p>}
    {error && <p>{error}</p>}
    <label htmlFor={`c-${name}`} className="hidden">{label}</label>
      <select id={`c-${name}`} key={`c-${name}`} className="border border-gray-100 rounded" name={name} onChange={handleChange}>
        <option key={`c-${name}-default`} value="">--Please choose a currency --</option>
          {currencies && currencies.map(((c: Currency, index: number) => <option key={`${c.id}-${index}`} value={c.short_code}>{c.name}</option>))}
      </select>
  </div>
}

export default Select