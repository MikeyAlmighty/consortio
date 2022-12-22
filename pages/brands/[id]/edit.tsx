import { useForm, SubmitHandler } from 'react-hook-form'
/* import { useRouter } from 'next/router' */
import { Brand } from '@models/brand'

const BrandAdd = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Brand>()
  const onSubmit: SubmitHandler<Brand> = data => console.info(data)

  /* const router = useRouter() */
  /* const { id } = router.query */
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <h1>EK EDIT</h1>
        <input type="submit" />
      </form>
    </>
  )
}

export default BrandAdd
