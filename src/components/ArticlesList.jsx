import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "./utils/api";


const ArticlesList = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles().then(({articles}) => {
      setArticles(articles)
      setIsLoading(false)
    })
  }, [])

  return (
    <section className="articles-list">
      <h2>Now trending</h2>
      {isLoading ? <p className="loading">Loading page...</p> : articles.map(article => {
        return <ArticleCard 
        key={article.article_id} 
        article_img_url={article.article_img_url}
        author={article.author}
        comment_count={article.comment_count}
        created_at={new Date(article.created_at).toDateString()}
        title={article.title}
        topic={article.topic}
        />
      })}
    </section>
  )
}

export default ArticlesList;