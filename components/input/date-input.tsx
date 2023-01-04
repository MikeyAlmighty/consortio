import DatePicker from 'react-datepicker'
import { FieldValues, FieldError, Controller, Control, useForm } from 'react-hook-form'

import 'react-datepicker/dist/react-datepicker.css'

type DateInputProps <T> = {
  name: string
  label: string
  isDisabled?: boolean
  control: Control<FieldValues>
  error?: FieldError
}

const DateInput = <T,>({
  name,
  label,
  isDisabled = false,
  control,
  error
}: DateInputProps<T>) => {
  return (
    <div className='mt-2'>
      {error?.type === 'required' ? <p className='text-xs text-red-900'>* Required</p> : null}
      <p className='text-sm text-gray-500'>{label}</p>
      <div className='border-2 rounded bg-white border-lime-500 p-3'>
        <Controller
          name={name}
          control={control}
          rules={{ required: true }}
          render={({ field }) => {
            return (
              <DatePicker
              disabled={isDisabled}
                selected={field.value}
                onChange={field.onChange}
              />
            )
          }}
        />
      </div>
    </div>
  )
}

export default DateInput
