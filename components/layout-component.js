import styles from '../styles/navigation/Layout.module.css'
import ApplicationHeader from './navigation/header-component'
import NavigationBar from './navigation/navigation-component'

const Layout = ({ children }) => {
  return (
    <>
      <NavigationBar />
      <div className={styles.container}>
        <ApplicationHeader />
        <main className={styles.main}>{children}</main>
      </div>
    </>
  )
}

export default Layout
