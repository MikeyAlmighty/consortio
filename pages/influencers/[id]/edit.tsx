import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useForm, SubmitHandler } from 'react-hook-form'
import InfluencerForm from '@components/forms/influencer-form'

import { Influencer } from '@models/influencer'
import { toasty } from '@utils/toast'

type InfluencerPageProps = {
  data: Influencer
}

const InfluencerEdit = ({ data }: InfluencerPageProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const router = useRouter()
  const { query } = router
  const {
    firstName,
    lastName,
    clicks,
    posts,
    socialDetails
  } = data

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors }
  } = useForm<Influencer>()

  useEffect(() => {
    setValue('firstName', firstName)
    setValue('lastName', lastName)
    setValue('socialDetails', socialDetails)
  }, [])

  const handleInfluencerEdit: SubmitHandler<Influencer> = data => {
    setIsLoading(true)
    fetch(`http://localhost:8000/influencers/${query.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(() => {
        setIsLoading(false)
        toasty({ message: 'Influencer updated.' })
      })
      .catch((error) => {
        toasty({ message: 'Influencer could not be updated, please try again.', isError: true })
        console.error('Error:', error)
        setIsLoading(false)
      })

    router.push('/influencers')
  }

  const handleInfluencerDelete = () => {
    fetch(`http://localhost:8000/influencers/${query.id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(() => {
        toasty({ message: 'Influencer deleted.' })
      })
      .catch((error) => {
        toasty({ message: 'Influencer could not be deleted, please try again.', isError: true })
        console.error('Error:', error)
      })
    router.push('/influencers')
  }

  return (
    <InfluencerForm
      register={register}
      handleSubmit={handleSubmit(handleInfluencerEdit)}
      handleDelete={handleInfluencerDelete}
      handleBack={router.back}
      errors={errors}
      isLoading={isLoading}
      isEdit={true}
    />
  )
}

export async function getServerSideProps ({ query }) {
  const { id } = query
  const res = await fetch(`http://localhost:8000/influencers/${id}`)
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error('[Influencers index] - Error: ', error)
      // throw new Error('[Influencers index] - Error: ', error)
    })
  return { props: { data: res } }
}

export default InfluencerEdit
