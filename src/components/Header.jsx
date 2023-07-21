import { Link } from "react-router-dom";
import logo from '../assets/logo.jpg'

const Header = () => {
  return (
    <Link className="no-decoration" to="/">
      <header className="header">
        <img src={logo} alt="Logo" className="logo"/>
        <h1>NC News</h1>
        <p>delivering the hottest scoops</p>
      </header>
    </Link>
  )
}

export default Header;