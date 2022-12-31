import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import TextInput from '@components/input/text-input'
import SelectInput from '@components/input/select-input'
import SubmitButton from '@components/buttons/submit-button'
import DateInput from '@components/input/date-input';
import Loader from '@components/loader'

import { toasty } from '@utils/toast'

import { Brand, IPR } from '@models/brand'

const BrandAdd = () => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [incorporationDate, setIncorporationDate] = useState<Date>()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<Brand>()

  const router = useRouter()

  const onSubmit: SubmitHandler<Brand> = data => {
    setIsLoading(true)
    fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((data) => {
        // TODO: Remove once hosted
        setTimeout(() => {
          console.log('Success:', data);
          setIsLoading(false)
          toasty({  message: 'Brand added.' })
        }, 1000)
      })
      .catch((error) => {
        toasty({ message: "Brand could not be added, please try again.", isError: true  })
        console.error('Error:', error);
        setIsLoading(false)
      });

      router.push('/brands')
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex px-96 pt-8 items-center flex-col border border-lime-500 border-2 mt-4 h-10/12'>
        <p className='text-lime-500 text-xl font-bold'>Add Brand</p>
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
          options={Object.entries(IPR).map(([value, label]) =>({ label, value }))}
        />
        <DateInput
          name='incorporationDate'
          label='Incorporation Date'
          control={control}
          error={errors.incorporationDate}
        />
        <div className='flex flex-col items-center'>
          <SubmitButton />
          <Loader isLoading={isLoading} />
        </div>
      </div>
    </form>
  )
}

export default BrandAdd
