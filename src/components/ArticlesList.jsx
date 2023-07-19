import { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "./utils/api";
import { Link } from "react-router-dom";


const ArticlesList = () => {
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    getArticles().then(({articles}) => {
      setArticles(articles)
      setIsLoading(false);
    })
  }, [])

  return (
    <section className="articles-list">
      <h2>Now trending</h2>
      {isLoading ? <p className="loading">Loading articles...</p> : articles.map(article => {
        return <Link className="no-decoration" to={`/articles/${article.article_id}`} >
          <ArticleCard 
          key={article.article_id} 
          article_id={article.article_id}
          article_img_url={article.article_img_url}
          author={article.author}
          comment_count={article.comment_count}
          created_at={new Date(article.created_at).toDateString()}
          title={article.title}
          topic={article.topic}
          />
        </Link>
      })}
    </section>
  )
}

export default ArticlesList;