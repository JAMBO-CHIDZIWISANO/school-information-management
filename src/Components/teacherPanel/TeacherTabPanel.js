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
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
            Your Timetable
        </button>
        
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Attendance
        </button>
        

      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
          <div className="row">
            <div className="col-12 col-md-8 col-lg-8">
              <TeacherTimeTable/>
            </div>
            <div className="col-12 col-md-4 col-lg-4">
              <h5>Your Subjects</h5>
              <TeacherSubject/>
            </div>
          </div>
            
            
          
        </div>
        
       
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
            <AttendanceForm/>
        </div>

      </div>
    </div>
  );
}

export default StudentsDetailsPanel;
