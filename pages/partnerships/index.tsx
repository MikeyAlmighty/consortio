import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import PartnershipTable from '@components/table/partnership-table'
import AddButton from '@components/buttons/add-button'

import { Partnership } from '@models/partnership'

type PartnershipPageProps = {
  data: Partnership[]
}

const PartnershipPage = ({ data }: PartnershipPageProps) => {
  const router = useRouter()

  const handlePartnershipClick = (id: string) => {
    router.push(`/partnerships/${id}/view`)
  }

  return (
    <>
      <p className='text-gray-500 text-2xl font-bold'>Partnerships</p>
      <ToastContainer />
      <div className='border my-4 w-11/12 border-2'>
        <PartnershipTable handleRowClick={handlePartnershipClick} defaultData={data} />
      </div>
      <Link href='/partnerships/add'>
        <AddButton />
      </Link>
    </>
  )
}

export async function getServerSideProps () {
  const res = await fetch('http://localhost:8000/partnerships')
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error('[Partnerships index] - Error: ', error)
      // throw new Error('[Partnerships index] - Error: ', error)
    })
  return { props: { data: res } }
}

export default PartnershipPage
