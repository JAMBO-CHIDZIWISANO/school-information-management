import {useState} from 'react'

const UploadFile = () => {

  const [image, setImage] = useState("")

  const handleChange = () => {
    
  }

  return (
    <div>
      <div className='files'>
        <strong>Upload Time Table</strong>
        <input type="file" value={image}  onChange={handleChange} />
      </div>
    </div>
  )
}

export default UploadFile