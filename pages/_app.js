import Layout from '../components/layout-component'
import '../styles/globals.css'

// Wraps all page componets
// The main page where global styles should be imported.
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
