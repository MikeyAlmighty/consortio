import { Fragment } from 'react'
import Image from 'next/image'
import Link from 'next/link'

import { navBarData } from './data'

const NavBar = () => (
  <>
    <div className='flex p-4 border-2 justify-center bg-gray-100'>
      <Image alt={'logo-icon'} src={'/assets/logo.svg'} width={15} height={15} className='mx-6' />
      <p className='font-bold text-3xl text-gray-500'>Consortio</p>
    </div>
  <div className='w-full items-center flex justify-around bg-gray-100'>
    {navBarData.map(({ label, alt, src, href }) => (
      <Fragment key={alt}>
        <Link href={href} className='text-gray-500 flex flex-col items-center py-8 cursor-pointer hover:bg-lime-200 hover:rounded w-4/12 border-2 hover:w-4/12'>
          <Image alt={alt} src={src} width={20} height={20} className='w-8' />
          <p className='font-bold text-gray-500 text-xl'>{label}</p>
        </Link>
      </Fragment>
    ))}
  </div>
    </>
)

export default NavBar
