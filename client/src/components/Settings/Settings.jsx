import Sidebar from '../Sidebar/Sidebar'
import './settings.css'
import SettingsImage from '../../assets/images/settings-img.jpg'

const Settings = () => {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
            <div className="settingsTitle">
                <span className="settingsUpdateTitle">Update Your Account</span>
                <span className="settingsDeleteTitle">Delete Account</span>
            </div>

            <form action="" className="settingsForm">
                <label htmlFor="">Profile Picture</label>
                <div className="settingsPP">
                    <img src={SettingsImage} className="settingsImage" alt="" />
                <label htmlFor="" className='fileInput'>
                    <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                </div>
                <input type="file" id="fileInput" style={{display : 'none'}}/>
                <label htmlFor="">Username</label>
                <input type="text" placeholder='safak' />
                <label htmlFor="">Email</label>
                <input type="email" placeholder='safak@gmail.com' />
                <label htmlFor="">Password</label>
                <input type="password"  />
                <button className='settingsSubmit'>Update</button>
            </form>
        </div>
            <Sidebar />
    </div>
  )
}

export default Settings