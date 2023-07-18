import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from './utils/api';
import CommentList from './CommentList';

const SingleArticle = () => {
  const { article_id } = useParams()
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getArticleById(article_id)
      .then(({article}) => {
        setArticle(article)
        setIsLoading(false)
        console.log(article)
      })
  }, [])

  if (isLoading) {
    return <p className='loading'>Loading article..</p>
  }

  return (
    <body>
      <article className="single-article">
        <header>
          <h2>{article.title}</h2>
          <div className="details">
            <p className="smaller right">{new Date(article.created_at).toDateString()}</p>
            <p className="smaller gray right">{article.topic}</p>
          </div>
          <p>By: {article.author}</p>
        </header>
        <img src={article.article_img_url} alt="Article Image" />
        <main>
          {article.body}
        </main>
        <p className="footer right smaller gray">{article.votes} Votes</p>
      </article>
      <CommentList article_id={article_id} />
    </body>
  )
}

export default SingleArticle;