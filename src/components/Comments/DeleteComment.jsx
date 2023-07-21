import { deleteComment } from "../utils/api";

const DeleteComment = props => {
  const { setComments, comment_id } = props;

  const handleClick = () => {
    deleteComment(comment_id)
    .then(() => {
      setComments(comments => comments.filter(comment => comment.comment_id !== comment_id))
    })
  }

  return (
    <button onClick={handleClick} className="delete-comment">Delete comment</button>
  )
}

export default DeleteComment;