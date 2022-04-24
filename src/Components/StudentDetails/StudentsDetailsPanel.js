import { useState } from "react";
import Form1Students from "./Form1Students";
import Form2Students from "./Form2Students";
import Form3Students from "./Form3Students";
import Form4Students from "./Form4Students";
import StudentList from "./StudentList";
//import "./App.css";

function StudentsDetailsPanel() {
    
    //defining toggle of the tab state
    const [toggleState, setToggleState] = useState(1);

    //defining tab index function
    const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(1)}
        >
          All Students
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Form 1 Students
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Form 2 Students
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Form 3 Students
        </button>
        <button
          className={toggleState === 5 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(5)}
        >
          Form 4 Students
        </button>

      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >

            <StudentList/>
          
        </div>
        
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
           <Form1Students/>
        </div>
        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <Form2Students/>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
            <Form3Students/>
        </div>

        <div
          className={toggleState === 5 ? "content  active-content" : "content"}
        >
          <Form4Students/>
        </div>
      </div>
    </div>
  );
}

export default StudentsDetailsPanel;
