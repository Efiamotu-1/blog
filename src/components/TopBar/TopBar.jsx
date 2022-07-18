import React from 'react'
import './topbar.css'
import ProfileImage from '../../assets/images/profile-img.jpg'

const TopBar = () => {
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
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </nav>
        <div className="topRight">
            <img src={ProfileImage} className='topImage' alt="profile" />
        <i className="topSearchIcon fas fa-search" aria-hidden="true"></i>

        </div>
    </header>
  )
}

export default TopBar