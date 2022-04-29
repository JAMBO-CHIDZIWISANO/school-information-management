import { useState } from "react";
import EnterMarks from './EnterMarks'
import TeacherTimeTable from "../TeachersDetails/TeacherTimeTable";
import AttendanceForm from "./AttendanceForm";
import TeacherSubject from "./TeacherSubject";


function StudentsDetailsPanel() {
    
    //defining toggle of the tab state
    const [toggleState, setToggleState] = useState(1);

    //defining tab index function
    const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container mb-5">
     

      
        
          <div className="row">
            <div className="">
              <TeacherTimeTable/>
              
            </div>
            <div><h5 className="mt-3"><strong>Your Subjects</strong></h5>
              <TeacherSubject/></div>
             
            </div>
          </div>
            
            
          
       
        
       

  );
}

export default StudentsDetailsPanel;
