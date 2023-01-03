import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/router'

import InfluencerForm from '@components/forms/influencer-form'
import { toasty } from '@utils/toast'
import { Influencer } from '@models/influencer'

const InfluencerAdd = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<Influencer>()

  const handleInfluencerAdd: SubmitHandler<Influencer> = data => {
    setIsLoading(true)
    fetch('http://localhost:8000/influencers', {
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
          toasty({ message: 'Influencer added.' })
        }, 1000)
      })
      .catch((error) => {
        toasty({ message: 'Influencer could not be added, please try again.', isError: true })
        console.error('Error:', error)
        setIsLoading(false)
      })
    router.push('/influencers')
  }

  const router = useRouter()

  return (
    <InfluencerForm
      register={register}
      handleSubmit={handleSubmit(handleInfluencerAdd)}
      handleBack={router.back}
      errors={errors}
      isLoading={isLoading}
    />
  )
}

export default InfluencerAdd
