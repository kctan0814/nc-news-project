import { useContext, useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";
import { UserContext } from '../context/Username'
import SortBy from "./SortBy";

const ArticlesList = () => {
  const { topic } = useParams()
  const { setCurrTopic } = useContext(UserContext)
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [sort_by, setSort_by] = useState('title')
  const [order, setOrder] = useState('ASC')
  setCurrTopic(topic)
  
  useEffect(() => {
    setIsLoading(true)
    getArticles(topic, sort_by, order).then(({articles}) => {
      setArticles(articles)
      setIsLoading(false);
    })
    .catch(() => {
      setIsError(true)
    })
  }, [topic, sort_by, order])

  if (isError) {
    return (
      <>
        <h2>We can't load the articles at the moment</h2>
        <p>Please try again later</p>
      </>
    )
  }

  return (
    <section className="articles-list">
      <header>
        <h2>{topic ? topic.slice(0,1).toUpperCase()+topic.slice(1) : "Now trending"}</h2>
        <SortBy setSort_by={setSort_by} setOrder={setOrder} />
      </header>
      {isLoading ? <p className="loading">Loading articles...</p> : articles.map(article => {
        return (
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
        )
      })}
    </section>
  )
}

export default ArticlesList;