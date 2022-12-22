import { ReactNode } from 'react'

import SideBar from '@components/side-bar/index'
import styles from '../../styles/Home.module.css'

type LayoutProps = {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <SideBar />
      <main className={styles.main}>
        {children}
      </main>
    </>
  )
}

export default Layout
