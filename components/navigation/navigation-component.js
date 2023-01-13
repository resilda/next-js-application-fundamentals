import Link from 'next/link'
import styles from '../../styles/navigation/NavigationBar.module.css'

const NavigationBar = () => {
  return (
    <nav className={styles.nav}>
      <ol className={styles.ol}>
        <li className={styles.li}>
          <Link href="/">Home</Link>
        </li>
        <li className={styles.li}>
          <Link href="/about">About</Link>
        </li>
      </ol>
    </nav>
  )
}

export default NavigationBar
