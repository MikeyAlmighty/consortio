import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer, toast } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css'

import BrandTable from '@components/table/brand-table'
import AddButton from '@components/buttons/add-button'
import { toasty } from '@utils/toast'

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
      <Link href='/brands/add'>
        <AddButton />
      </Link>
      <ToastContainer />
      <div className='border border-lime-500 w-8/12 border-2'>
        <BrandTable handleRowClick={handleBrandClick} defaultData={data} />
      </div>
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
