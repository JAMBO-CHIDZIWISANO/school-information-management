import { useState } from "react";
import EnterMarks from './EnterMarks'
import TeacherTimeTable from "../TeachersDetails/TeacherTimeTable";
import AttendanceForm from "./AttendanceForm";
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
            Enter Student Marks
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Attendance
        </button>
        

      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >

            <TeacherTimeTable/>
          
        </div>
        
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <EnterMarks/>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <AttendanceForm/>
        </div>

      </div>
    </div>
  );
}

export default StudentsDetailsPanel;
