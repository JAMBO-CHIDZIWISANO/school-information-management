import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react'
import { useParams, navigate } from 'react-router-dom'
import '../smisPostsComments.css'

//

import { useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';


/// nnnnnnnnnnnnnnnnn

const EditComments = (props) => {

  const navigate = useNavigate();
  const {smisPostsId} = useParams();
  const [smisPostObject, setSmisPostObject] = useState({});
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect( () => {
    axios.get(`http://localhost:4000/api/smis/smisPosts/${smisPostsId}`).then((response) => {
      setSmisPostObject(response.data) 
  });

    axios.get(`http://localhost:4000/api/smis/smisComments/${smisPostsId}`).then((response) => {
      console.log(response)
      setComment(response.data)
   });
   
}, []);
    // now sending it to database usig post api
  const sendComment = () => {
    axios.post("http://localhost:4000/api/smis/addSmisComment", {
      smisComments: newComment, smisPostsId: smisPostsId }).then((response) => {
    // navigate('/viewcomments');
    // refreshing to add new comments automatically
    const newCommentAdded = {smisComments: newComment };
    setComment([...comment, newCommentAdded]);
    setNewComment("");
    });
  };

  // another comment input and can be removed though
  const message = useRef(null);
  // set true on focus and false after pressing cancel
  const [showButtons, setShowButtons] = useState(false);
  // set to true on input data and false when blank
  const [enableButton, setEnableButton] = useState(true);

  // creating event handler
  // when input is clicked, show the underline and buttons
  const commentFocus = () => {
    setShowButtons(true);
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
    // // sending comment 
    // const senComment = (event) =>{
    //   event.preventDefault();
    // }

 
   // edit function
  // const editComments = async () => {
  //   const response = await axios.get(`http://localhost:4000/api/smis/smisComments/${smisPostsId}`);
  //   setComment(response.data);    
  // };
  // // refresh window

  //   useEffect(() => {
  //     loadComment();
  //   }, []);


  return (
    <div className='container'>
      <div className='userComments'>
      <hr />
      <div style={{textAlign: "right"}}>
        <Link to={"/view-posts"}> 
          <input type="button" value="Back" className="btn btn-primary btn-block" />
        </Link>
        
      </div>
      <hr/>
      <div className="editcomment">
        <div className="addCommentContainer">
           
          <textarea className='commentInput' autoFocus={props.autoFocus} type="text" placeholder="Write your comment...." 
          autoComplete="off" onChange={(event) => {setNewComment(event.target.value)}}
          value={newComment}  ref={message} 
          onFocus={commentFocus}
          onKeyUp={commentStroke} />
           {showButtons && (
            <div>
            <button className="btn btn-primary" disabled={enableButton} onClick={sendComment}>Update</button>
            <button className="btn btn-danger" disabled={enableButton}  
              onClick ={ () => {
                setShowButtons(false);
                setNewComment("");
              }} >Cancel</button>
            </div>
            )}

          {/* <button className='commentbutton'  onClick={sendComment}>Send Comment</button> */}
        </div>
        
        <div className="listOfComments">
        
               {comment.map((item, key) =>{
               return (
                  <div className="comment" key={key}>
                    <strong >ParentName Comment : </strong><br/>{item.smisComments}
                    
                  </div>
                  ) }
               )  
                }
                         
        
        </div>
    </div>
    </div>

    </div>

  
  )
}

export default EditComments

