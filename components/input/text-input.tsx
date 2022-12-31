import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form'

type TextInputProps = {
  label: string
  error?: FieldError
  register: UseFormRegister<FieldValues>
}

const TextInput = ({ register, label, error }: TextInputProps) => {
  return (
    <div>
      {error?.type === 'required' ? <p className='text-xs text-red-900'>Required</p> : null}
      <p className='text-sm text-gray-500'>{label}</p>
      <input className='border rounded border-lime-500' {...register} />
    </div>
  )
}

export default TextInput
