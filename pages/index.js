import Head from 'next/head'
import Sidebar from '../components/Sidebar'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="">
      <h1>This is a Spotify 2.0 Build!</h1>

      <main>
        <Sidebar />
        {/* {Center} */}
      </main>

      <div>
        {/* {Player} */}
      </div>
    </div>
  )
}
