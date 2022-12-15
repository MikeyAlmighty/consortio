import Image from 'next/image'
import Link from 'next/link'

import { topBarData } from './data'

const TopBar = () => {
  return (
    <div className='flex justify-between absolute left-0 pl-24 mt-12 w-10/12 h-2/12'>
      {topBarData.map(({ label, alt, src, href }) => (
        <div key={alt} className='flex items-center justify-start cursor-pointer'>
          <Image alt={alt} src={src} width={15} height={15} className='mx-2' />
          <Link href={href} className='text-gray-500'>{label}</Link>
        </div>
      ))}
    </div>
  )
}

export default TopBar
