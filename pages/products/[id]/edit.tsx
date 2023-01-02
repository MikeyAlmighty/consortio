import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import ProductForm from '@components/forms/product-form'

import { Product } from '@models/product'
import { toasty } from '@utils/toast'

type ProductPageProps = {
  data: Product
}

const ProductEdit = ({ data }: ProductPageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const { query } = router
  const { name, description } = data

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Product>()

  useEffect(() => {
    setValue('name', name)
    setValue('description', description)
  }, [])

  const handleProductEdit: SubmitHandler<Product> = data => {
    setIsLoading(true)
    fetch(`http://localhost:8000/products/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        setIsLoading(false)
        toasty({ message: 'Product updated.' })
      })
      .catch((error) => {
        toasty({ message: 'Product could not be updated, please try again.', isError: true })
        console.error('Error:', error)
        setIsLoading(false)
      })

    router.push('/products')
  }

  const handleProductDelete = () => {
    fetch(`http://localhost:8000/products/${query.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        toasty({ message: 'Product deleted.' })
      })
      .catch((error) => {
        toasty({ message: 'Product could not be deleted, please try again.', isError: true })
        console.error('Error:', error)
      })
    router.push('/products')
  }

  return (
    <ProductForm
      register={register}
      handleSubmit={handleSubmit(handleProductEdit)}
      handleDelete={handleProductDelete}
      handleBack={router.back}
      errors={errors}
      isLoading={isLoading}
      isEdit={true}
    />
  )
}

export async function getServerSideProps ({ query }) {
  const { id } = query
  const res = await fetch(`http://localhost:8000/products/${id}`)
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error('[Products index] - Error: ', error)
      // throw new Error('[Products index] - Error: ', error)
    })
  return { props: { data: res } }
}

export default ProductEdit
