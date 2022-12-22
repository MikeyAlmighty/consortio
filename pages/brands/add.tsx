import { useForm, SubmitHandler } from 'react-hook-form'
import axios from 'axios'

import TextInput from '@components/input/text-input'
import SelectInput from '@components/input/select-input'
import SubmitButton from '@components/buttons/submit-button'

import { Brand, IPR } from '@models/brand'

const BrandAdd = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Brand>()
  const onSubmit: SubmitHandler<Brand> = data => {

    fetch('https://collision-api-production.up.railway.app/brands', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex px-96 pt-8 flex-col border border-lime-500 border-2 mt-4 h-10/12'>
        <TextInput
          name='name'
          label='Name'
          register={{ ...register('name', { required: true }) }}
          error={errors.name}
        />
        <TextInput
          name='origin'
          label='Country of Origin'
          register={{ ...register('origin', { required: true }) }}
          error={errors.origin}
        />
        <SelectInput
          name='origin'
          label='Intellectual Property Rights'
          register={{ ...register('IPR', { required: true }) }}
          error={errors.IPR}
          options={Object.entries(IPR).map(([value, label]) =>({ label, value }))}
        />
        {/* // TODO: Convert to dropdown */}
        {/* <input className='border' defaultValue="test" {...register('IPR', { required: true })} />
            {errors.IPR && <span>This field is required</span>}
          */}
        <SubmitButton />
      </div>
    </form>
  )
}

export default BrandAdd
