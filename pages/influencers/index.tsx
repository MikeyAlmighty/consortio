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
      <Link href='/influencers/add'>
        <AddButton />
      </Link>
      <div className='border mt-4 border-lime-500 w-8/12 border-2'>
        <InfluencerTable handleRowClick={handleInfluencerClick} defaultData={data} />
      </div>
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
