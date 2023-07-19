import { Link } from 'react-router-dom'
 
const NavBar = props => {
  return (
    <nav>
      <ul>
        <li><Link className='no-decoration' to='/' ><p>Home</p></Link></li>
        <li><Link className='no-decoration' to='/' ><p>Topic 1</p></Link></li>
        <li><Link className='no-decoration' to='/' ><p>Topic 2</p></Link></li>
        <li><Link className='no-decoration' to='/' ><p>Topic 3</p></Link></li>
        <li><Link className='no-decoration' to='/' ><p>Topic 4</p></Link></li>
      </ul>
    </nav>
  )
}

export default NavBar;