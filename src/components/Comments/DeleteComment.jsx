import { useState } from "react";
import { deleteComment } from "../utils/api";

const DeleteComment = props => {
  const { setComments, comment_id } = props;
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  const handleClick = () => {
    setIsLoading(true)
    deleteComment(comment_id)
    .then(() => {
      setIsLoading(false)
      setComments(comments => comments.filter(comment => comment.comment_id !== comment_id))
    })
    .catch(() => {
      setIsLoading(false)
      setIsError(true)
    })

  }

  return (
    <>
      {isError && <p className="err-msg">Error Occured: Please try again later</p>}
      <button disabled={isLoading} onClick={handleClick} className="delete-comment">Delete comment</button>
    </>
  )
}

export default DeleteComment;