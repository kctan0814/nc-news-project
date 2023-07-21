import { useContext, useState } from "react";
import { UserContext } from "../context/Username";
import { postComment } from "../utils/api";

const AddComment = props => {
  const { article_id, setComments } = props;
  const { username } = useContext(UserContext)
  const [isError, setIsError] = useState(false);
  const [isTooLong, setIsTooLong] = useState(false)
  const [isSuccessful, setIsSuccessful] = useState(false)
  const [isEmpty, setIsEmpty] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  const [comment, setComment] = useState('')
  const [message, setMessage] = useState("")
  const maxChar = 300;

  const handleSubmit = e => {
    e.preventDefault()
    setIsLoading(true)
    if (isEmpty) {
      setMessage("Can't post an empty comment :(")
      setIsEmpty(true)
      setIsLoading(false)
      return
    }
    const toSend = {username, body: comment}
    postComment(article_id, toSend)
      .then(({comment}) => { 
        setIsLoading(false)
        setIsSuccessful(true)
        setComment('')
        setIsEmpty(true)
        setIsError(false)
        setComments(c => {
          return [comment, ...c]
        })
      })
      .catch(() => {
        setIsLoading(false)
        setIsError(true)
      })
  }

  const commentChange = e => {
    e.target.value.length ? setIsEmpty(false) : setIsEmpty(true)
    setMessage('')
    setIsError(false)
    setIsSuccessful(false)
    e.target.value.length > maxChar ? setIsTooLong(true) : setIsTooLong(false);
    setComment(() => {
      return e.target.value
    })
  }

  if (isError) {
    setMessage("Error occured: Please try again later.")
    setIsError(false)
  } 
  else if (isTooLong) {
    setMessage("Oops! That's too many characters :(")
    setIsTooLong(false)
  } 
  else if (isSuccessful) {
    setMessage("Comment added successfully!")
    setIsSuccessful(false)
  } 

  return (
    <form className="add-comment" onSubmit={handleSubmit} action="/">
      <h3>Add Comment</h3>
      <textarea name="comment-body" id="comment-body" value={comment} onChange={commentChange} placeholder="What do you think?"></textarea>
      <p>{message}</p>
      <p className="char-count">{comment.length}/{maxChar}</p>
      <button disabled={isLoading} ><span>+</span> Add comment</button>
    </form>
  )
}

export default AddComment;