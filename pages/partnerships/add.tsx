import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'

import PartnershipForm from '@components/forms/partnership-form'
import { toasty } from '@utils/toast'
import { Partnership } from '@models/partnership'
import { SelectProps } from '@models/select'

type PartnershipAddProps = {
  brandOptions: SelectProps
  influencerOptions: SelectProps
}

const PartnershipAdd = ({ brandOptions, influencerOptions }: PartnershipAddProps) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const [productOptions, setProductOptions] = useState<Array<{ value: string, label: string }>>()

  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors }
  } = useForm<Partnership>()

  const brandId = watch('brandId')
  const router = useRouter()

  useEffect(() => {

    const getProductOptions = async () => {
    const products = await fetch(`http://localhost:8000/products/brand/${brandId}`)
      .then(async (response) => await response.json())
      .then((data) => data.map(({ _id, name} ) => ({ label: name, value: _id })))
      .catch((error) => {
        console.error('Error:', error)
      })
    setProductOptions(products)
    }
    if (brandId) {
      getProductOptions()
    }
  }, [brandId])

  const handlePartnershipAdd: SubmitHandler<Partnership> = data => {
    setIsLoading(true)
    fetch('http://localhost:8000/partnerships', {
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
          toasty({ message: 'Partnership added.' })
        }, 1000)
      })
      .catch((error) => {
        toasty({ message: 'Partnership could not be added, please try again.', isError: true })
        console.error('Error:', error)
        setIsLoading(false)
      })
    router.push('/partnerships')
 }

  return (
    <PartnershipForm
      register={register}
      handleSubmit={handleSubmit(handlePartnershipAdd)}
      handleBack={router.back}
      brandOptions={brandOptions}
      productOptions={productOptions}
      influencerOptions={influencerOptions}
      errors={errors}
      isLoading={isLoading}
      control={control}
    />
  )
}

export async function getServerSideProps () {
  const brandOptions = await fetch('http://localhost:8000')
    .then(async (response) => await response.json())
    .then((data) => data.map(({ _id, name }) => ({ label: name, value: _id })))
    .catch((error) => {
      console.error('Error:', error)
    })

  const influencerOptions = await fetch('http://localhost:8000/influencers')
    .then(async (response) => await response.json())
    .then((data) => data.map(({ _id, socialDetails: { handle } }) => ({ label: handle, value: _id })))
    .catch((error) => {
      console.error('Error:', error)
    })

  return { props: { brandOptions, influencerOptions: influencerOptions } }
}

export default PartnershipAdd
