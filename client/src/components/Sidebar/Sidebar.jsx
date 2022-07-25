import './sidebar.css'
import SidebarImage from '../../assets/images/sidebar-img.jpg'

const Sidebar = () => {
  return (
    <div className='sidebar'>
        <div className="sidebarItem">
            <div className="sidebarTitle">ABOUT ME</div>
            <img src={SidebarImage} className="sidebarImg" alt="sidebar img" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse ipsam, consectetur odio doloremque </p>    
        </div>

        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className='sidebarList'>
                <li className="sidebarListItem">Life</li>
                <li className="sidebarListItem">Music</li>
                <li className="sidebarListItem">Style</li>
                <li className="sidebarListItem">Sport</li>
                <li className="sidebarListItem">Tech</li>
                <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>

        <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
        <i className="sidebarIcon fab fa-facebook-square" aria-hidden="true"></i>
        <i className="sidebarIcon fab fa-twitter-square" aria-hidden="true"></i>
        <i className="sidebarIcon fab fa-pinterest-square" aria-hidden="true"></i>
        <i className="sidebarIcon fab fa-instagram-square" aria-hidden="true"></i>
        </div>
        </div>
    </div>
  )
}

export default Sidebar