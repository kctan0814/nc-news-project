import { useState } from "react"
import { patchArticle } from "../utils/api";

const Vote = props => {
  const { article_id, setAddVote } = props
  const [upvotePress, setUpvotePress] = useState(false);
  const [downvotePress, setDownvotePress] = useState(false)
  const [isError, setIsError] = useState(false)


  const upvote = e => {
      if (!upvotePress) {
      setUpvotePress(true)
      setDownvotePress(false)
      setAddVote(1)
      const inc_votes = downvotePress ? 2 : 1
      patchArticle(article_id, { inc_votes })
      .then(() => {
        setIsError(false)
      })
      .catch(() => {
        setUpvotePress(false)
        setAddVote(0)
        setIsError(true)
      })
    } else {
      setUpvotePress(false)
      setAddVote(0)
      
      patchArticle(article_id, { inc_votes: -1})
      .then(() => {
        setIsError(false)
      })
      .catch(() => {
        setUpvotePress(true)
        setAddVote(1)
        setIsError(true)
      })
    }
  }

  const downvote = e => {
    if (!downvotePress) {
      setDownvotePress(true)
      setUpvotePress(false)
      setAddVote(-1)
      const inc_votes = upvotePress ? -2 : -1
      patchArticle(article_id, { inc_votes })
      .then(() => {
        setIsError(false)
      })
      .catch(() => {
        setDownvotePress(false)
        setAddVote(0)
        setIsError(true)
      })
    } else {
      setDownvotePress(false)
      setAddVote(0)
      patchArticle(article_id, { inc_votes: 1 })
      .then(() => {
        setIsError(false)
      })
      .catch(() => {
        setDownvotePress(true)
        setAddVote(-1)
        setIsError(true)
      })
    }
  }

  return (
    <>
      {isError && <p className="err-msg">Error: Vote button currently not working</p>}
      <button onClick={upvote} className={`no-style upvote ${upvotePress && 'pressedUp'}`}>⇧</button>
      <button onClick={downvote} className={`no-style downvote ${downvotePress && 'pressedDown'}`}>⇧</button>
    </>
  )
}

export default Vote;