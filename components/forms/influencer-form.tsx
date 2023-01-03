import TextInput from '@components/input/text-input'
import SubmitButton from '@components/buttons/submit-button'
import DeleteButton from '@components/buttons/delete-button'
import BackButton from '@components/buttons/back-button'
import Loader from '@components/loader'

import { FormProps } from '@models/form'

const InfluencerForm = ({
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
    <div className='flex w-full px-96 pt-8 items-center flex-col border border-lime-500 border-2 mt-4 h-10/12'>
      <p className='text-lime-500 text-xl font-bold'>{!isEdit ? 'Add' : 'Edit'} Influencer</p>
      <TextInput
        label='First name'
        register={{ ...register('firstName', { required: true }) }}
        error={errors.firstName}
      />
      <TextInput
        label='Last name'
        register={{ ...register('lastName', { required: true }) }}
        error={errors.lastName}
      />
      <p className='py-4 text-gray-500 font-bold text-sm'>Social Details</p>
      <TextInput
        label='Online presence (handle)'
        register={{ ...register('socialDetails.handle', { required: true }) }}
        error={errors.handle}
      />
      <TextInput
        label='Email'
        register={{ ...register('socialDetails.email', { required: true }) }}
        error={errors.socialDetails?.email}
      />
      <TextInput
        label='Instagram'
        register={{ ...register('socialDetails.instagram') }}
        error={errors.socialDetails?.instagram}
      />
      <TextInput
        label='YouTube'
        register={{ ...register('socialDetails.youtube') }}
        error={errors.socialDetails?.youtube}
      />
      <TextInput
        label='TikTok'
        register={{ ...register('socialDetails.tiktok') }}
        error={errors.socialDetails?.tiktok}
      />
      {isEdit ? (
        <>
          <TextInput
            isDisabled={true}
            label='Posts'
            register={{ ...register('posts') }}
            error={errors.posts}
          />
          <TextInput
            isDisabled={true}
            label='Clicks'
            register={{ ...register('clicks') }}
            error={errors.clicks}
          />
        </>
      ): null
      }
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

export default InfluencerForm
