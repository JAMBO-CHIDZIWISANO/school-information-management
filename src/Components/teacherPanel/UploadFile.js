import {useState} from 'react'
import axios from "axios";

const UploadFile = () => {
  // setting up state
  const [file, setFile] = useState();
  const [fileName, setFileName] = useState("");
 
  const saveFile = (e) => {
    setFile(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };
 
  const uploadFile = async (e) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("fileName", fileName);
    try {
      const res = await axios.post("http://localhost:4000/api/smis/upload", formData );
      console.log(res);
    } catch (ex) {
      console.log(ex);
    }
  };

  return (
    <div>

      <div className='files'>
        <strong>Upload Time Table</strong>
        <input type="file"  onChange={saveFile} />
        <button onClick={uploadFile}>Upload</button>
      </div>

    </div>
  );
}

export default UploadFile;