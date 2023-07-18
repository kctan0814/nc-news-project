import { Link } from 'react-router-dom'

const ArticleCard = props => {
  const {article_id, article_img_url, author, comment_count, created_at, title, topic} = props;
  return (
    <div className="article-card">
      <main className="article-main">
        <header className="article-header">
          <div className="names">
            <h3><Link to={`/articles/${article_id}`} >{title}</Link></h3>
            <p className="author-name">By: {author}</p>
          </div>
          <div className="details">
            <p className="date-posted">{created_at}</p>
            <p className="topic">{topic}</p>
          </div>
        </header>
        <footer className="article-footer">
          <p className="comment-count">{comment_count} Comments</p>
        </footer>
      </main>
      <img src={article_img_url} alt="article image" />
    </div>
  )
}

export default ArticleCard;