import { ReactNode } from 'react'

import SideBar from '@components/side-bar/index'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div>
      <SideBar />
      <main className='ml-96 absolute w-8/12 flex flex-col items-center justify-end mt-4 '>
        {children}
      </main>
    </div>
  )
}

export default Layout
