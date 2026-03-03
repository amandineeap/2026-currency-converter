interface SelectProps {
  label: string
  name: string
}

const Select = ({label, name}: SelectProps) => {
  const handleChange = () => {
    console.log('handle change')
  }
  
  return <div>
    <label htmlFor={`c-${name}`} className="hidden">{label}</label>
      <select id={`c-${name}`} className="border border-gray-100 rounded" name={name} onChange={handleChange}>
        <option value="">--Please choose a currency --</option>
        <option value="one">One</option>
      </select>
  </div>
}

export default Select