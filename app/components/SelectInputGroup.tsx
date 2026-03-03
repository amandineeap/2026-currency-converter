import Select from "./Select"

interface SelectInputGroupProps {
  label: string
  name: string
}

const SelectInputGroup = ({label, name}: SelectInputGroupProps) => {
  return <div className="flex mb-4">
    <input className="border border-gray-100 rounded p-4 mr-4" />
    <Select label={label} name={name} />
  </div>
}

export default SelectInputGroup