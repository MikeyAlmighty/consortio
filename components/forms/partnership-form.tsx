import { useForm } from 'react-hook-form'

import TextInput from '@components/input/text-input'
import SelectInput from '@components/input/select-input'
import DescriptionInput from '@components/input/description-input'
import SubmitButton from '@components/buttons/submit-button'
import DeleteButton from '@components/buttons/delete-button'
import BackButton from '@components/buttons/back-button'
import DateInput from '@components/input/date-input'

import { FormProps } from '@models/form'
import { SelectProps } from '@models/select'

type ProductFormProps = FormProps & {
  brandOptions: SelectProps
  influencerOptions: SelectProps
  productOptions: SelectProps
}

const ProductForm = ({
  handleSubmit,
  handleDelete,
  handleBack,
  control,
  register,
  brandOptions,
  influencerOptions,
  productOptions,
  errors,
  isView
}: ProductFormProps) => {
 const { watch }  = useForm()
  return (
    <form onSubmit={handleSubmit}>
      <div className='flex px-96 pt-8 items-center flex-col border border-lime-500 border-2 mt-4 h-10/12 bg-gray-100'>
        <p className='text-lime-500 text-xl font-bold'>{!isView ? 'Add' : 'View'} Partnership</p>
        {isView ? (
          <DescriptionInput
            label='Description'
            isDisabled={true}
            register={{ ...register('description') }}
            error={errors.origin}
          />)
        : null
        }
        <SelectInput
          label='Brand'
          register={{ ...register('brandId', { required: true }) }}
          error={errors.brand?.name}
          options={brandOptions}
        />
        <SelectInput
          label='Influencer'
          register={{ ...register('influencerId', { required: true }) }}
          error={errors.influencerId}
          options={influencerOptions}
        />
        <SelectInput
          label='Product'
          register={{ ...register('product.name', { required: true }) }}
          error={errors.productId}
          options={productOptions}
        />
        <DateInput
          name='partnershipDate'
          label='Partnership Start Date'
          isDisabled={!isView}
          control={control}
          error={errors.partnershipDate}
        />
        <div className='flex flex-col items-center'>
          <div>
            {isView ? <DeleteButton handleDelete={handleDelete} label='Terminate' /> : null}
            <SubmitButton />
          </div>
          <BackButton handleBack={handleBack} />
        </div>
      </div>
    </form>
  )
}

export default ProductForm
