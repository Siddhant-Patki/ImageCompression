import React from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div className='nav'>
      <header className="navbar">
        <nav class="nav-links">
          <Link className='navs' to="/">Home</Link>
          <Link className='navs' to="/about">About</Link>
          <Link className='navs' to="/features">Features</Link>
          <Link className='navs' to="/resize">Resize Image</Link>
          <Link className='navs' to="/contact">Contact</Link>
        </nav>
        <div class="search-bar">
          <input type="text" placeholder="Search"/>
        </div>
      </header>
    </div>
  )
}

export default Nav
