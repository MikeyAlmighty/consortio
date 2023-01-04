import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'

import ProductForm from '@components/forms/product-form'
import { toasty } from '@utils/toast'
import { Product } from '@models/product'

type ProductAddProps = {
  brandOptions: { value: string, label: string }[]
}

const ProductAdd = ({ brandOptions }: ProductAddProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Product>()

  const handleProductAdd: SubmitHandler<Product> = data => {
    setIsLoading(true)
    fetch('http://localhost:8000/products', {
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
          toasty({ message: 'Product added.' })
        }, 1000)
      })
      .catch((error) => {
        toasty({ message: 'Product could not be added, please try again.', isError: true })
        console.error('Error:', error)
        setIsLoading(false)
      })
    router.push('/products')
  }

  const router = useRouter()

  return (
    <ProductForm
      brandOptions={brandOptions}
      register={register}
      handleSubmit={handleSubmit(handleProductAdd)}
      handleBack={router.back}
      errors={errors}
      isLoading={isLoading}
    />
  )
}

export async function getServerSideProps () {
  const brandsResult = await fetch('http://localhost:8000')
    .then(async (response) => await response.json())
    .then((data) => data.map(({ _id, name} ) => ({ label: name, value: _id })))
    .catch((error) => {
      console.error('Error:', error)
    })
  return { props: { brandOptions: brandsResult } }
}

export default ProductAdd
