import { useState } from "react";
import LoginParent from './LoginParent'
import ChildrenExam from "./ChildrenExam";
import ChildrenInfo from "./ChildrenInfo";
function BoardParent() {
    
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
            Your Information
        </button>
        <button
          className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
          onClick={() => toggleTab(2)}
        >
            Your Children Information
        </button>
       
        

      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? "content  active-content" : "content"}
        >

           <LoginParent />
          
        </div>
        
        <div
          className={toggleState === 2 ? "content  active-content" : "content"}
        >
          <ChildrenInfo/>
        </div>
        

      </div>
    </div>
  );
}

export default BoardParent;
