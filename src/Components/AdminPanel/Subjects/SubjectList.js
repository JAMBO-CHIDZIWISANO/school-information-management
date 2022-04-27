import axios from "axios";
import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";


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
    <div className="container mt-5">
         <hr />
      <div style={{textAlign: "right"}}>
        <Link to={"/view-subjects"}> 
          <input type="button" value="View Sujects" className="btn btn-primary btn-block" />
        </Link>
        <Link to={"/admin/manage-subjects"}> 
          <input type="button" value="Manage Sujects" className="btn btn-primary btn-block" />
        </Link>
      </div>
     
      <div className="subjects-list"><h3>Subject List per class</h3><hr></hr> </div>

          {subject.map((item, index) => {
            return (
                <div className="subjects ">
                    Subject Code : <h3>{item.subjectCode}</h3>
                    Subject Name : <h3>{item.subjectName}</h3>
                </div>               
            )
        })}
      </div>
  )
}

export default SubjectList