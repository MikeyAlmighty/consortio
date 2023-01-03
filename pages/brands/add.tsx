import { useState } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import 'react-toastify/dist/ReactToastify.css'

import BrandForm from '@components/forms/brand-form'
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

  const handleBrandAdd: SubmitHandler<Brand> = data => {
    setIsLoading(true)
    fetch('http://localhost:8000', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(async (response) => await response.json())
      .then((data) => {
        // TODO: Remove once hosted
        setTimeout(() => {
          console.log('Success:', data)
          setIsLoading(false)
          toasty({ message: 'Brand added.' })
        }, 1000)
      })
      .catch((error) => {
        toasty({ message: 'Brand could not be added, please try again.', isError: true })
        console.error('Error:', error)
        setIsLoading(false)
      })
    router.push('/brands')
  }

  return (
    <BrandForm
      register={register}
      handleSubmit={handleSubmit(handleBrandAdd)}
      handleBack={router.back}
      errors={errors}
      isLoading={isLoading}
      control={control}
    />
  )
}

export default BrandAdd
