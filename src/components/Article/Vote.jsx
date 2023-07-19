import { useState } from "react"
import { patchArticle } from "../utils/api";

const Vote = props => {
  const { article_id, setAddVote } = props
  const [upvotePress, setUpvotePress] = useState(false);
  const [downvotePress, setDownvotePress] = useState(false)
  const [isError, setIsError] = useState(false)

  const upvote = e => {
    setUpvotePress(true)
    setDownvotePress(false)
    setAddVote(1)
    patchArticle(article_id, { inc_votes: 1})
    .then(() => {
      setIsError(false)
    })
    .catch(() => {
      setUpvotePress(false)
      setAddVote(0)
      setIsError(true)
    })
  }

  const downvote = e => {
    setDownvotePress(true)
    setUpvotePress(false)
    setAddVote(-1)
    patchArticle(article_id, { inc_votes: -1})
    .then(() => {
      setIsError(false)
    })
    .catch(() => {
      setDownvotePress(false)
      setAddVote(0)
      setIsError(true)
    })
  }

  return (
    <>
      {isError && <p className="err-msg">Error: Vote button currently not working</p>}
      <button disabled={upvotePress} onClick={upvote} className='no-style upvote'>⇧</button>
      <button disabled={downvotePress} onClick={downvote} className='no-style downvote'>⇧</button>
    </>
  )
}

export default Vote;