import { useContext, useState } from "react";
import { UserContext } from "../context/Username";
import { postComment } from "../utils/api";

const AddComment = props => {
  const { article_id, setComments } = props;
  const { username } = useContext(UserContext)
  const [isError, setIsError] = useState(false);
  const [isTooLong, setIsTooLong] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [comment, setComment] = useState('')
  const maxChar = 300;
  let message = <p></p>

  const handleSubmit = e => {
    e.preventDefault()
    const toSend = {username, body: comment}
    postComment(article_id, toSend)
      .then(({comment}) => { 
        setIsSuccessful(true)
        setComment('')
        setIsError(false)
        setComments(c => {
          return [comment, ...c]
        })
      })
      .catch(() => {
        setIsError(true)
      })
  }

  const commentChange = e => {
    setComment(() => {
      setIsError(false)
      setIsSuccessful(false)
      e.target.value.length > maxChar ? setIsTooLong(true) : setIsTooLong(false);
      return e.target.value
    })
  }

  if (isError) {
    message = <p>Error occured: Please try again later.</p>
  } else if (isTooLong) {
    message = <p>Oops! That's too many characters :(</p>
  } else if (isSuccessful) {
    message = <p>Comment added successfully!</p>
  } 

  return (
    <form className="add-comment" onSubmit={handleSubmit} action="/">
      <h3>Add Comment</h3>
      <textarea name="comment-body" id="comment-body" value={comment} onChange={commentChange} placeholder="What do you think?"></textarea>
      {message}
      <p className="char-count">{comment.length}/{maxChar}</p>
      <button><span>+</span> Add comment</button>
    </form>
  )
}

export default AddComment;