import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from './utils/api';
import CommentList from './CommentList';
import Error from './Error';

const SingleArticle = () => {
  const { article_id } = useParams()
  const [article, setArticle] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [apiError, setApiError] = useState({});
  const [msg, setMsg] = useState('')

  useEffect(() => {
    getArticleById(article_id)
      .then(({article}) => {
        setArticle(article)
        setIsLoading(false)
        console.log(article)
      })
      .catch(({response}) => {
        setApiError(response)
        setMsg(response.data.msg)
      })
  }, [])

  if (isLoading) {
    return <Error status={apiError.status} msg={msg} />
  } else if (isError) {
    return <p className='loading'>Loading article..</p>
  } else {
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
          <figure style={{backgroundImage: `url("${article.article_img_url}")`}} aria-label="Article Image" />
          <main>
            {article.body}
          </main>
          <p className="footer right smaller gray">{article.votes} Votes</p>
        </article>
        <CommentList article_id={article_id} />
      </body>
    )
  }

}

export default SingleArticle;