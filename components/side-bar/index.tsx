import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { sideBarData } from './data'

const SideBar = () => (
  <div className='absolute flex-col items-center flex left-0 border rounded-tl-lg rounded-bl-lg ml-4 mt-4 p-4 border-lime-500 border-2 bg-gray-100 h-full'>
    <div className='flex border rounded p-4 border-lime-500 border-2'>
      <Image alt={'logo-icon'} src={'/assets/logo.svg'} width={15} height={15} className='mx-6' />
      <p className='font-bold text-3xl text-gray-500'>Collision</p>
    </div>
    {sideBarData.map(({ label, alt, src, href }) => (
      <Fragment key={alt}>
        <Link href={href} className='text-gray-500 flex flex-col items-center py-8 cursor-pointer hover:bg-gray-200 hover:rounded hover:w-10/12'>
          <Image alt={alt} src={src} width={20} height={20} className='w-8' />
          <p className='font-medium text-gray-500'>{label}</p>
        </Link>
      </Fragment>
    ))}
  </div>
)

export default SideBar
