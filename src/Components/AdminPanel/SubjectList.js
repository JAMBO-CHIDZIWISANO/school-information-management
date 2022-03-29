import axios from "axios";
import React, {useEffect, useState} from "react";
// import { toast } from "react-toastify";


const SubjectList = () => {

  const [subject, setSubject] = useState([]);

  const loadSubject = async () => {
      const response = await axios.get("http://localhost:4000/api/smis/getAllSubjects");
      setSubject(response.data);    
  };
  // refresh window
      useEffect(() => {
          loadSubject();
      }, []);
    
  return (
    <div>
   
      <div className="subjects-list"><h3>Here is the List of Subject per class</h3><br></br><hr></hr> </div>

        
          {subject.map((item, index) => {
            return (
                    <div className="subjects" title="hey">
                    
                        Subject Code : <h3>{item.subjectCode}</h3>
                        Subject Name : <h3>{item.subjectName}</h3>

                    </div>               
            )
        })}


      </div>
  )
}

export default SubjectList