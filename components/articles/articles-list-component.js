import styles from '../../styles/components/Articles.module.css'
import ArticleItem from './article-item.component'

const ArticlesList = ({ articles }) => {
  return (
    <div className={styles.grid}>
      {articles.map((article) => (
        <div key={article.id}>
          <ArticleItem article={article} />
        </div>
      ))}
    </div>
  )
}

export default ArticlesList
