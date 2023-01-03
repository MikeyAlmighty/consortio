import { ReactNode } from 'react'

import NavBar from '@components/nav-bar/index'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <NavBar />
      <main className='w-full flex flex-col items-center mt-4 '>
        {children}
      </main>
    </>
  )
}

export default Layout
