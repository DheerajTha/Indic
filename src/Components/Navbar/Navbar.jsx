import React from 'react'
import "./Navbar.css";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navigation-wrap">
  <div className="container">
    <Link className="navbar-brand nav-link text-lg" to="/">Indic Technologies</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <HiOutlineMenuAlt1 className='navbar-toggler-icon ' />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link " aria-current="page" to="/Home">Home</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Service
          </Link>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link className="dropdown-item" to="/Web">Web Development</Link></li>
            <li><Link className="dropdown-item" to="/Application">Application Development</Link></li>            
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About Us</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/FAQ">FAQ</Link>
        </li>
        
        
      </ul>
      <form className="d-flex">
        <Link to="/Contact">
        <button className="button " type="submit">Contact Us</button>
        </Link>
      </form>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar