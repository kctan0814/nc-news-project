import { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getTopics } from './utils/api'
import { UserContext } from './context/Username'
 
const NavBar = () => {
  const { currTopic } = useContext(UserContext)
  const [topics, setTopics] = useState([])

  useEffect(() => {
    getTopics()
    .then(({topics}) => {
      setTopics(() => {
        return topics.map(topic => topic.slug)
      })
    })
  }, [])
  
  return (
    <nav>
      <ul>
        <li className={`${currTopic === undefined && 'current'}`}><Link className='no-decoration' to='/' ><p>Home</p></Link></li>
        {topics.map(topic => {
          return <li className={`${currTopic === topic && 'current'}`} ><Link className="no-decoration" to={`/topics/${topic}`} ><p>{topic.slice(0,1).toUpperCase()+topic.slice(1)}</p></Link></li>
        })}
      </ul>
    </nav>
  )
}

export default NavBar;