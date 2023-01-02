import { ReactNode } from 'react'

import SideBar from '@components/side-bar/index'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='flex flex-col'>
      <SideBar />
      <main className='flex flex-col relative items-center justify-end ml-4 mt-4 '>
        {children}
      </main>
    </div>
  )
}

export default Layout
