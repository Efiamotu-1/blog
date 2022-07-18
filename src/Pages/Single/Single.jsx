import Sidebar from '../../components/Sidebar/Sidebar'
import SinglePost from '../../components/SinglePost/SinglePost'
import './single.css'

const Single = () => {
return (
    <div className='single'>
       <SinglePost /> 
       <Sidebar />
    </div>
)
}

export default Single