import { useEffect, useState } from "react";
import { getCommentsById } from "../utils/api";
import CommentCard from "./CommentCard";
import AddComment from "./AddComment";

const CommentList = props => {
  const { article_id } = props;
  const [comments, setComments] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    getCommentsById(article_id)
      .then(({comments}) => {
        setComments(comments)
        setIsLoading(false)
      })
      .catch(() => {
        setIsError(true);
      })
  }, [])

  return (
    <section className="comment-section">
      <h2>{comments.length} Comments</h2>
      <AddComment article_id={article_id} setComments={setComments} />
      {isError ? <h3>Error occured: Cannot load the comments at the moment</h3> : 
      isLoading ? <p className="loading">Loading comments...</p> : 
      comments.length === 0 ? <h3>No comments yet...</h3> : comments.map(comment => {
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