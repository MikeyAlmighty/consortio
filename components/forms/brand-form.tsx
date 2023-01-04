import TextInput from '@components/input/text-input'
import SelectInput from '@components/input/select-input'
import DateInput from '@components/input/date-input'
import SubmitButton from '@components/buttons/submit-button'
import DeleteButton from '@components/buttons/delete-button'
import BackButton from '@components/buttons/back-button'
import Loader from '@components/loader'

import { IPR } from '@models/brand'
import { FormProps } from '@models/form'

const BrandForm = ({
  handleSubmit,
  handleDelete,
  handleBack,
  register,
  errors,
  control,
  isLoading,
  isEdit = false
}: FormProps) => (
  <form onSubmit={handleSubmit}>
    <div className='flex px-96 pt-8 items-center flex-col border border-lime-500 border-2 mt-4 h-10/12 bg-gray-100'>
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
          {isEdit ? <DeleteButton handleDelete={handleDelete} /> : null}
          <SubmitButton />
        </div>
        <BackButton handleBack={handleBack} />
        <Loader isLoading={isLoading} />
      </div>
    </div>
  </form>
)

export default BrandForm
