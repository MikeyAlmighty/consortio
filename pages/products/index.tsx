import Link from 'next/link'
import { useRouter } from 'next/router'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import ProductTable from '@components/table/product-table'
import AddButton from '@components/buttons/add-button'

import { Product } from '@models/product'

type ProductPageProps = {
  data: Product[]
}

const ProductPage = ({ data }: ProductPageProps) => {
  const router = useRouter()

  const handleProductClick = (id: string) => {
    router.push(`/products/${id}/edit`)
  }

  return (
    <>
      <ToastContainer />
      <p className='text-gray-500 text-2xl font-bold'>Products</p>
      <div className='border border-lime-500 my-4 w-8/12 border-2'>
        <ProductTable handleRowClick={handleProductClick} defaultData={data} />
      </div>
      <Link href='/products/add'>
        <AddButton />
      </Link>
    </>
  )
}

export async function getServerSideProps () {
  const res = await fetch('http://localhost:8000/products')
    .then(async (response) => await response.json())
    .catch((error) => {
      console.error('Error:', error)
    })
  return { props: { data: res } }
}

export default ProductPage
