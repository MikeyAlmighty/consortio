import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import BrandTable from '@components/table/brand-table'
import AddButton from '@components/buttons/add-button'

import { Brand } from '@models/brand'

type BrandPageProps = {
  data: Brand[]
}

const BrandPage = ({ data }: BrandPageProps) => {
  const router = useRouter()

  const handleBrandClick = (id: string) => {
    router.push(`/brands/${id}/edit`)
  }

  return (
    <>
      <ToastContainer />
      <p className='text-gray-500 text-2xl font-bold'>Brands</p>
      <div className='border my-4 w-11/12 border-2'>
        <BrandTable handleRowClick={handleBrandClick} defaultData={data} />
      </div>
      <Link href='/brands/add'>
        <AddButton />
      </Link>
    </>
  )
}

export async function getServerSideProps () {
  const res = await fetch('http://localhost:8000')
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error('[Brands index] - Error: ', error)
      // throw new Error('[Brands index] - Error: ', error)
    })
  return { props: { data: res } }
}

export default BrandPage
