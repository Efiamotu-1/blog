import './write.css'
import WriteImage from '../../assets/images/write-img.jpg'

const Write = () => {
  return (
    <div className='write'>
      <img src={WriteImage} className='writeImage' alt="" />
        <form className='writeForm'>
            <div className="writeFormGroup">
              <label htmlFor="fileInput" className='writeIcon'>
                <i className='fas fa-plus'></i>
              </label>
              <input type="text" id="fileInput" style={{display : 'none'}} />
              <input type="text" placeholder='Title' className='writeInput' autoFocus={true} />

            </div>
            <div className="writeFormGroup">
              <textarea placeholder='Tell your story...' className="writeInput writeText"></textarea>
            </div>
            <button className='writeSubmit'>Publish</button>
        </form>
    </div>
  )
}

export default Write