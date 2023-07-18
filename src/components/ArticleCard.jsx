const ArticleCard = props => {
  const {article_img_url, author, comment_count, created_at, title, topic} = props;
  return (
    <div className="article-card">
      <main className="article-main">
        <header className="article-header">
          <div className="names">
            <h3>{title}</h3>
            <p className="author-name">By: {author}</p>
          </div>
          <div className="details">
            <p className="date-posted">{created_at}</p>
            <p className="topic">{topic}</p>
          </div>
        </header>
        <footer className="article-footer">
          <p className="likes-count">0 Likes</p>
          <p className="comment-count">{comment_count} Comments</p>
        </footer>
      </main>
      <img src={article_img_url} alt="article image" />
    </div>
  )
}

export default ArticleCard;