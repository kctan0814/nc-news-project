import { useContext } from "react";
import { UserContext } from "../context/Username";
import DeleteComment from "./DeleteComment";

const CommentCard = props => {
  const { username } = useContext(UserContext)
  const { comment_id, author, body, created_at, votes, setComments} = props;
  const isCurrentUser = username === author;



  return (
    <div className="comment-card">
      <h3>{author}</h3>
      <p className="date smaller">{created_at}</p>
      <p className="comment-body">{body}</p>
      <footer>
        <p className="votes smaller gray">{votes} votes</p>
        {isCurrentUser && <DeleteComment setComments={setComments} comment_id={comment_id} />}
      </footer>
    </div>
  )
}

export default CommentCard;