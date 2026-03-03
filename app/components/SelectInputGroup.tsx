import Select from "./Select"

interface SelectInputGroupProps {
  label: string
  name: string
  onChange: (value: string) => void
}

const SelectInputGroup = ({label, name, onChange}: SelectInputGroupProps) => {
  return <div className="flex mb-4">
    <Select label={label} name={name} onChange={onChange} />
  </div>
}

export default SelectInputGroup