import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import BrandForm from '@components/forms/brand-form'

import { Brand } from '@models/brand'
import { toasty } from '@utils/toast'

type BrandPageProps = {
  data: Brand
}

const BrandEdit = ({ data }: BrandPageProps) => {
  const [isLoading, setIsLoading] = useState<Boolean>(false)
  const router = useRouter()
  const { query } = router
  const { name, origin, IPR, incorporationDate } = data

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors }
  } = useForm<Brand>()

  useEffect(() => {
    setValue('name', name)
    setValue('origin', origin)
    setValue('IPR', IPR)
    setValue('incorporationDate', new Date(incorporationDate))
  }, [])

  const handleBrandEdit: SubmitHandler<Brand> = data => {
    setIsLoading(true)
    fetch(`http://localhost:8000/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        setIsLoading(false)
        toasty({ message: 'Brand updated.' })
      })
      .catch((error) => {
        toasty({ message: 'Brand could not be updated, please try again.', isError: true })
        console.error('Error:', error)
        setIsLoading(false)
      })

    router.push('/brands')
  }

  const handleBrandDelete = () => {
    fetch(`http://localhost:8000/${query.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        toasty({ message: 'Brand deleted.' })
      })
      .catch((error) => {
        toasty({ message: 'Brand could not be deleted, please try again.', isError: true })
        console.error('Error:', error)
      })
    router.push('/brands')
  }

  return (
    <BrandForm
      register={register}
      handleSubmit={handleSubmit(handleBrandEdit)}
      handleDelete={handleBrandDelete}
      handleBack={router.back}
      errors={errors}
      isLoading={isLoading}
      isEdit={true}
      control={control}
    />
  )
}

export async function getServerSideProps ({ query }) {
  const { id } = query
  const res = await fetch(`http://localhost:8000/${id}`)
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error('[Brands index] - Error: ', error)
      // throw new Error('[Brands index] - Error: ', error)
    })
  return { props: { data: res } }
}

export default BrandEdit
