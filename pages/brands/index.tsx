import Link from 'next/link'
import { useRouter } from 'next/router'
/* import { useEffect, useState } from 'react' */

import BrandTable from '@components/table/brand-table'
import AddButton from '@components/buttons/add-button'

import { Brand } from '@models/brand'

type BrandPageProps = {
  data: Brand[]
}

const BrandPage = ({ data }: BrandPageProps) => {
  /* const [brandData, setBrandData] = useState([]) */

  const router = useRouter()

  const handleBrandClick = (id: string) => {
    router.push(`/brands/${id}/edit`)
  }

  return (
    <>
      <Link href='/brands/add'>
        <AddButton />
      </Link>
      <div className='border border-lime-500 w-8/12 border-2'>
        <BrandTable handleRowClick={handleBrandClick} defaultData={data} />
      </div>
    </>
  )
}

export async function getServerSideProps () {
  const res = await fetch('http://collision-api-production.up.railway.app/brands')
    .then((response) => response.json())
    .catch((error) => {
      console.error('Error:', error);
    })
  return { props: { data: res } }
}

export default BrandPage
