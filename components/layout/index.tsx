import TopBar from '@components/top-bar'
import SideBar from '@components/side-bar/index'
import styles from '../../styles/Home.module.css'

const Layout = ({ children }) => {
    return (
        <>
            <div>
            <TopBar />
            </div>
            <SideBar />
            <main className={styles.main}>
                {children}
            </main>

        </>
    )
}

export default Layout
