import Link from 'next/link'
import { useRouter } from 'next/router'
/* import { useEffect, useState } from 'react' */

import InfluencerTable from '@components/table/influencer-table'
import AddButton from '@components/buttons/add-button'

import { Influencer } from '@models/influencer'

type InfluencerPageProps = {
  data: Influencer[]
}

const InfluencerPage = ({ data }: InfluencerPageProps) => {
  /* const [influencerData, setInfluencerData] = useState([]) */

  const router = useRouter()

  const handleInfluencerClick = (id: string) => {
    router.push(`/influencers/${id}/edit`)
  }

  return (
    <>
      <Link href='/influencers/add'>
        <AddButton />
      </Link>
      <div className='border border-lime-500 w-8/12 border-2'>
        <InfluencerTable handleRowClick={handleInfluencerClick} defaultData={data} />
      </div>
    </>
  )
}

export async function getServerSideProps () {
  const res = await fetch('http://localhost:8000/influencers')
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    })
  return { props: { data: res } }
}

export default InfluencerPage
