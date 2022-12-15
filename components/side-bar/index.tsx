import Image from 'next/image'
import Link from 'next/link'

import { sideBarData } from './data'

const SideBar = () => {
  return (
    <div className='absolute flex-col flex left-0 border rounded-tl-lg rounded-bl-lg ml-4 p-4 border-lime-500 h-full'>
      {sideBarData.map(({ label, alt, src, href }) => (
        <>
          <Link href={href} className='text-gray-500'>
            <Image alt={alt} src={src} width={20} height={20} className='w-8 p-1 py-16 cursor-pointer hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-600 ' />
          </Link>
        </>
      ))}
    </div>
  )
}

export default SideBar
