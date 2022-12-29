import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Consortio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/assets/logo.svg" />
      </Head>
    </div>
  )
}

export default Home
