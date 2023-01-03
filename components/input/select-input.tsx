import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form'

type SelectInputProps = {
  label: string
  options: Array<{ label: string, value: string }>
  error?: FieldError
  register: UseFormRegister<FieldValues>
}

const SelectInput = ({ register, label, error, options }: SelectInputProps) => (
  <>
    {error?.type === 'required' ? <p className='text-xs text-red-900'>* Required</p> : null}
    <p className='text-sm text-gray-500 text-left'>{label}</p>
    <select className='border border-lime-500 w-full rounded text-gray-500 p-3' {...register}>
      {options.map(({ value, label }) => (
        <option key={value} value={value}>{label}</option>
      ))}
    </select>
  </>
)

export default SelectInput
