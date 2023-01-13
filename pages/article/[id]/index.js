import Link from 'next/link'
/** [1] Using `useRouter` to get all the information regarding the articles from parent
 *  If `getServerSideProps` is not created
 *  import { useRouter } from 'next/router' */

const ArticleDetails = ({ article }) => {
  // const router = useRouter()
  // const { id } = router.query

  return (
    <div>
      <h1>{paths.title}</h1>
      <p>{paths.body}</p>

      <Link href="/">Go back</Link>
    </div>
  )
}

export default ArticleDetails

/** [2] Fetching article data by id at the time of request */

export const getServerSideProps = async (context) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`,
  )
  const article = await response.json()

  return {
    article: {
      article,
    },
  }
}

/** [3]: Much faster way
 *  Using the function on [2] by naming it getStaticProps and combining it with the function below */

// export const getStaticPaths = async () => {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//   const articles = await response.json()

//   const ids = articles.map((article) => article.id)

//   const path = ids.map((id) => ({
//     params: {
//       id: id.toString(),
//     },
//   }))
//   return {
//     paths,
//     // If the user goes to an article that doesn't exist it will render a 404 page.
//     fallback: false,
//   }
// }
