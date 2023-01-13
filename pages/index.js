/** Components that are imported from `next/head` represent meta tags.
 * @Head - Used to have custom title headers for the applciation.
 */
import Head from 'next/head'
import ArticlesList from '../components/articles/articles-list-component'

export default function Home({ articles }) {
  return (
    <div>
      <Head>
        <meta name="keywords" content="home page" />
      </Head>
      <h1>Welcome to Next.js Application Home page</h1>
      <ArticlesList articles={articles} />
    </div>
  )
}

// Fetching data at the build time

export const getStaticProps = async () => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=2`,
  )
  const articles = await response.json()

  return {
    props: {
      articles,
    },
  }
}
