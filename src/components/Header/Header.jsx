import './header.css'
import HeaderImage from '../../assets/images/header-img.jpg'
const Header = () => {
  return (
    <header className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img src={HeaderImage} className='headerImage' alt="header img" />
    </header>
  )
}

export default Header