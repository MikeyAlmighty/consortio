import { UseFormRegister, FieldValues, FieldError } from 'react-hook-form'

type DescriptionInputProps = {
  label: string
  isDisabled?: boolean
  error?: FieldError
  register: UseFormRegister<FieldValues>
}

const DescriptionInput = ({ register, label, isDisabled = false, error }: DescriptionInputProps) => {
  return (
    <div className='pt-2'>
      {error?.type === 'required' ? <p className='text-xs text-red-900'>Required</p> : null}
      <p className='text-sm text-gray-500'>{label}</p>
      <textarea disabled={isDisabled} className='border h-24 p-6 border-lime-500' {...register} />
    </div>
  )
}

export default DescriptionInput
