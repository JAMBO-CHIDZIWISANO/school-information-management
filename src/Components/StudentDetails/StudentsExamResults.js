import { ArrowBackSharp } from "@mui/icons-material";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import Form1ResultsRecords from "./Form1ResultsRecords";

import Form2ResultsRecords from "./Form2ResultsRecords";

import Form3ResultsRecords from "./Form3ResultsRecords";

import Form4ResultsRecords from "./Form4ResultsRecords";


function StudentsExamResults() {
    
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
          Form 1 Results
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
          Form 2 Results
        </button>
        <button
          className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(3)}
        >
          Form 3 Results
        </button>
        <button
          className={toggleState === 4 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(4)}
        >
          Form 4 Results
        </button>

      </div>

      <div className="content-tabs">
        
        
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >
            <div style={{textAlign: "left"}}>
            <Link to="/admin/students-details">
                <Button variant="primary">
                    <ArrowBackSharp/>
                </Button>
            </Link>
            </div>
           <Form1ResultsRecords/>
        </div>
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
            <Form2ResultsRecords/>
        </div>

        <div
          className={toggleState === 3 ? "content  active-content" : "content"}
        >
            <Form3ResultsRecords/>
        </div>

        <div
          className={toggleState === 4 ? "content  active-content" : "content"}
        >
          <Form4ResultsRecords/>
        </div>
      </div>
      
    </div>
  );
}

export default StudentsExamResults;
