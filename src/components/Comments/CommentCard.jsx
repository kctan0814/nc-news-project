const CommentCard = props => {
  const {author, body, created_at, votes} = props;

  return (
    <div className="comment-card">
      <h3>{author}</h3>
      <p className="date smaller">{created_at}</p>
      <p className="comment-body">{body}</p>
      <p className="votes smaller gray">{votes} votes</p>
    </div>
  )
}

export default CommentCard;