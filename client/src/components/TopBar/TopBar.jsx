import React from 'react'
import './topbar.css'
import ProfileImage from '../../assets/images/profile-img.jpg'
import { Link } from 'react-router-dom'

const TopBar = () => {
  const user = false
  return (
    
    <header className='top'>
        <div className="topLeft">
        <i className="topIcon fab fa-facebook-square" aria-hidden="true"></i>
        <i className="topIcon fab fa-twitter-square" aria-hidden="true"></i>
        <i className="topIcon fab fa-pinterest-square" aria-hidden="true"></i>
        <i className="topIcon fab fa-instagram-square" aria-hidden="true"></i>
        </div>

        <nav className="topCenter">
            <ul className='topList'>
                <li className='topListItem'>
                  <Link to="/" className='link'>HOME</Link>   
                </li>
                <li className='topListItem'>
                <Link to="/" className='link'>ABOUT</Link>     
                </li>
                <li className='topListItem'>
                <Link to="/" className='link'>CONTACT</Link>   
                </li>
                <li className='topListItem'>
                <Link to="/write" className='link'>WRITE</Link>   
                  </li>
                <li className='topListItem'>
                <Link to="/" className='link'>{user && 'LOGOUT'}</Link>   
                  </li>
            </ul>
        </nav>
        <div className="topRight">
          {user ? 
          <img src={ProfileImage} className='topImage' alt="profile" />
          :
          <ul className='topList'>
            <li className='topListItem'>
          <Link to="/login" className="link">LOGIN</Link>
            </li>
            <li className='topListItem'>
          <Link to="/register" className="link">REGISTER</Link>
            </li>
          </ul>
        }
        <i className="topSearchIcon fas fa-search" aria-hidden="true"></i>

        </div>
    </header>
  )
}

export default TopBar