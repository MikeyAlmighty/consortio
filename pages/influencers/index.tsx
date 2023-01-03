import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import InfluencerTable from '@components/table/influencer-table'
import AddButton from '@components/buttons/add-button'

import { Influencer } from '@models/influencer'

type InfluencerPageProps = {
  data: Influencer[]
}

const InfluencerPage = ({ data }: InfluencerPageProps) => {
  const router = useRouter()

  const handleInfluencerClick = (id: string) => {
    router.push(`/influencers/${id}/edit`)
  }

  return (
    <>
      <ToastContainer />
      <p className='text-gray-500 text-2xl font-bold'>Influencers</p>
      <div className='border my-4 w-11/12 border-2'>
        <InfluencerTable handleRowClick={handleInfluencerClick} defaultData={data} />
      </div>
      <Link href='/influencers/add'>
        <AddButton />
      </Link>
    </>
  )
}

export async function getServerSideProps () {
  const res = await fetch('http://localhost:8000/influencers')
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  return { props: { data: res } }
}

export default InfluencerPage
