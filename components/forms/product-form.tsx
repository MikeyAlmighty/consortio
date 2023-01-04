import TextInput from '@components/input/text-input'
import SelectInput from '@components/input/select-input'
import DescriptionInput from '@components/input/description-input'
import SubmitButton from '@components/buttons/submit-button'
import DeleteButton from '@components/buttons/delete-button'
import BackButton from '@components/buttons/back-button'
import Loader from '@components/loader'

import { FormProps } from '@models/form'

type ProductFormProps = FormProps & {
  brandOptions: { value: string, label: string }[],
}

const ProductForm = ({
  handleSubmit,
  handleDelete,
  handleBack,
  brandOptions,
  register,
  errors,
  isLoading,
  isEdit = false
}: FormProps) => (
  <form onSubmit={handleSubmit}>
    <div className='flex px-96 pt-8 items-center flex-col border border-lime-500 border-2 mt-4 h-10/12 bg-gray-100'>
      <p className='text-lime-500 text-xl font-bold'>{!isEdit ? 'Add' : 'Edit'} Product</p>
      <TextInput
        label='Name'
        register={{ ...register('name', { required: true }) }}
        error={errors.name}
      />
      {!isEdit ?
        <SelectInput
          label='Brand'
          register={{ ...register('brandId', { required: true }) }}
          error={errors.brandId}
          options={brandOptions}
        />
       :
         <TextInput
          label='Brand'
          isDisabled={true}
          register={{ ...register('brandName') }}
          error={errors.brandName}
        />
      }
      <DescriptionInput
        label='Description'
        register={{ ...register('description', { required: true }) }}
        error={errors.origin}
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

export default ProductForm
