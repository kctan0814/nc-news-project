import { useEffect, useState } from "react";
import { getCommentsById } from "./utils/api";
import CommentCard from "./CommentCard";

const CommentList = props => {
  const { article_id } = props;
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    getCommentsById(article_id)
      .then(({comments}) => {
        setComments(comments)
        setIsLoading(false)
      })
  })

  return (
    <section className="comment-section">
      <h2>{comments.length} Comments</h2>
      {isLoading ? <p className="loading">Loading comments...</p> : 
      comments.map(comment => {
        return <CommentCard
          key={comment.comment_id}
          author={comment.author}
          body={comment.body}
          created_at={new Date(comment.created_at).toLocaleString()}
          votes={comment.votes}
        />;
      })}
    </section>
  )
}

export default CommentList;