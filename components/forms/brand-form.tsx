import {
  UseFormHandleSubmit,
  UseFormRegister,
  Control,
  FieldErrors,
  FieldValues
} from 'react-hook-form'

import TextInput from '@components/input/text-input'
import SelectInput from '@components/input/select-input'
import SubmitButton from '@components/buttons/submit-button'
import DeleteButton from '@components/buttons/delete-button'
import DateInput from '@components/input/date-input'
import Loader from '@components/loader'

import { IPR } from '@models/brand'

type BrandFormProps = {
  handleSubmit: UseFormHandleSubmit<FieldValues>
  handleDelete: (id: string) => void
  register: UseFormRegister<FieldValues>
  errors: FieldErrors<FieldValues>
  control: Control<FieldValues, TContext>
  isLoading: boolean
  isEdit: boolean
}

const BrandForm = ({
  handleSubmit,
  handleDelete,
  register,
  errors,
  control,
  isLoading,
  isEdit = false
}: BrandFormProps) => (
  <form onSubmit={handleSubmit}>
    <div className='flex px-96 pt-8 items-center flex-col border border-lime-500 border-2 mt-4 h-10/12'>
      <p className='text-lime-500 text-xl font-bold'>{!isEdit ? 'Add' : 'Edit'} Brand</p>
      <TextInput
        label='Name'
        register={{ ...register('name', { required: true }) }}
        error={errors.name}
      />
      <TextInput
        label='Country of Origin'
        register={{ ...register('origin', { required: true }) }}
        error={errors.origin}
      />
      <SelectInput
        label='Intellectual Property Rights'
        register={{ ...register('IPR', { required: true }) }}
        error={errors.IPR}
        options={Object.entries(IPR).map(([value, label]) => ({ label, value }))}
      />
      <DateInput
        name='incorporationDate'
        label='Incorporation Date'
        control={control}
        error={errors.incorporationDate}
      />
      <div className='flex flex-col items-center'>
        <div>
          <SubmitButton />
          {isEdit ? <DeleteButton handleDelete={handleDelete} /> : null}
        </div>
        <Loader isLoading={isLoading} />
      </div>
    </div>
  </form>
)

export default BrandForm
