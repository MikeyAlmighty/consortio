import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'
import PartnershipForm from '@components/forms/partnership-form'

import { Partnership } from '@models/partnership'
import { toasty } from '@utils/toast'

type PartnershipPageProps = {
  data: Partnership
}

const PartnershipEdit = ({ data }: PartnershipPageProps) => {
  const router = useRouter()
  const { query } = router
  const { description, terminationDate } = data

  const {
    register,
    control,
    setValue,
    formState: { errors }
  } = useForm<Partnership>()

  useEffect(() => {
    setValue('description', description)
    setValue('terminationDate', terminationDate)
  }, [])

  const handlePartnershipTerminate = () => {
    fetch(`http://localhost:8000/partnerships/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        toasty({ message: 'Partnership terminated.' })
      })
      .catch((error) => {
        toasty({ message: 'Partnership could not be terminated, please try again.', isError: true })
        console.error('Error:', error)
      })
    router.push('/partnerships')
  }

  return (
    <PartnershipForm
      register={register}
      handleDelete={handlePartnershipTerminate}
      handleBack={router.back}
      errors={errors}
      isView={true}
      control={control}
    />
  )
}

type ServerSideProps = {
  query: { id: string }
}

export async function getServerSideProps ({ query }: ServerSideProps) {
  const { id } = query
  const res = await fetch(`http://localhost:8000/partnerships/${id}`)
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error('[Partnerships index] - Error: ', error)
      // throw new Error('[Partnerships index] - Error: ', error)
    })
  return { props: { data: res } }
}

export default PartnershipEdit
