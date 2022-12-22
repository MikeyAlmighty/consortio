import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form'

type SelectInputProps = {
  name: string
  label: string
  options: Array<{ label: string, value: string }>
  error?: FieldError
  register: UseFormRegister<FieldValues>
}

const SelectInput = ({ register, label, error, options }: SelectInputProps) => {
  return (
    <>
      {error?.type === 'required' ? <p className='text-xs text-red-900'>Required</p> : null}
      <p className='text-sm text-gray-500'>{label}</p>
      <select className='border border-lime-500' {...register}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>{label}</option>
        ))}
      </select>
    </>
  )
}

export default SelectInput
