import { useState, useRef} from "react";
import Comment from './comments/Comment'

import './comments.css'


const CommentForm = (props) => {

  const message = useRef(null);
  // trigger the underline animation
  const [showCommentLine, setCommentLine] = useState(false);
  // set true on focus and false after pressing cancel
  const [showButtons, setShowButtons] = useState(false);
  // set to true on input data and false when blank
  const [enableButton, setEnableButton] = useState(true);

  // creating event handler
  // when input is clicked, show the underline and buttons
  const commentFocus = () => {
    setCommentLine(true);
    setShowButtons(true);
  }
  // when input field is clicked, hide the underline
  const commentFocusOut = () => {
    setCommentLine(false);
  }
  // enable comment button when input has value
  const commentStroke = event => {
    let currentMessage = event.target.value;
    if(currentMessage){
      setEnableButton(false);
    }
    else{
      setEnableButton(true);
    }
    }
    // sending comment 
    const sendComment = (event) =>{
      event.preventDefault();
    }

  return (
    <div>

      <form>
        <section className="commentBox">

          <input autoFocus={props.autoFocus}
            type="text"
            placeholder="Add a public comment here....." 
            ref={message} 
            onFocus={commentFocus}
            onBlur={commentFocusOut}
            onKeyUp={commentStroke} />
            {/* underline on the comment field */}
          {showCommentLine && <div className="commentLine"></div>}
          </section>
          {showButtons && (
            <>
            <button className="commentButton sendButton" disabled={enableButton} onClick={sendComment}>Comment</button>
            <button className="commentButton" style={{color:"gray", backgroundColor:"transparent" }} 
              onClick ={ () => {
                setShowButtons(false);
                message.current.value = ""
              }} >Cancel</button>
            </>
            )}
      </form>
    </div>  
    )
  }
export default CommentForm;
