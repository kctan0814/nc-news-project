import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getArticleById } from '../utils/api';
import CommentList from '../Comments/CommentList';
import Error from '../Error';
import Vote from './Vote';

const SingleArticle = () => {
  const { article_id } = useParams()
  const [article, setArticle] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [apiError, setApiError] = useState({})
  const [addVote, setAddVote] = useState(0)
  const [msg, setMsg] = useState('')

  useEffect(() => {
    getArticleById(article_id)
      .then(({article}) => {
        setArticle(article)
        setIsLoading(false)
      })
      .catch(({response}) => {
        setApiError(response)
        setMsg(response.data.msg)
      })
  }, [])

  if (apiError.status) {
    return <Error status={apiError.status} msg={`Article ${article_id} not found`} />
  } else if (isLoading) {
    return <p className='loading'>Loading article..</p>
  } else {
    return (
      <>
        <article className="single-article">
          <header>
            <h2>{article.title}</h2>
            <div className="details">
              <p className="smaller right">{new Date(article.created_at).toDateString()}</p>
              <p className="smaller gray right">{article.topic}</p>
            </div>
            <p>By: {article.author}</p>
          </header>
          <figure className='article-img' style={{backgroundImage: `url("${article.article_img_url}")`}} aria-label="Article Image" />
          <main>
            {article.body}
          </main>
          <footer className="footer">
            <Vote article_id={article_id} setAddVote={setAddVote} />
            <p className="right smaller gray">{article.votes + addVote} Votes</p>
          </footer>
        </article>
        <CommentList article_id={article_id} />
      </>
    )
  }

}

export default SingleArticle;