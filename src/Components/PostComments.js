import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { toast } from "react-toastify";
import '../smisPostsComments.css'
import { Link } from 'react-router-dom';
import authservice from './services/auth.service'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';


const PostComments = (props) => {

    const navigate = useNavigate();
    const {smisPostsId} = useParams();
    // const {smisCommentsId} = useParams();
    const [smisPostObject ,setSmisPostObject] = useState([])
    const [smisCommentsId, setSmisCommentsId] = useState({});
    const [comment, setComment] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [userName, setUserName] = useState([]);
    const [commentUser, setCommentUser] = useState("");
    const user = authservice.getCurrentUser(); 
    
    
    const deleteComment = (smisCommentsId) => {
      if (window.confirm('Action is irriversible! Do you really want to delete this?')){
          axios.delete(`http://localhost:4000/api/smis/smisComments/${smisCommentsId}`);
          toast.success('Comment Deleted Successfully');
          // reload window after sometime
          setTimeout( () => window.location.reload(), 500);
      }
    };  
    
    useEffect( () => {
      axios.get(`http://localhost:4000/api/smis/smisPosts/${smisPostsId}`).then((response) => {
        setSmisPostObject(response.data) 
    });
      axios.get(`http://localhost:4000/api/smis/smisComments/${smisPostsId}`).then((response) => {
        console.log(response)
        setComment(response.data)
      });
      
  }, []);

      const sendComment = (e) => {
        e.preventDefault();
        axios.post("http://localhost:4000/api/smis/addSmisComment",{
          smisComments: newComment, username: commentUser, smisPostsId: smisPostsId}).then((response) => {
        // refreshing to add new comments automatically
        const newCommentAdded = {smisComments: newComment};
        const commentUsername =  {username: commentUser};
        
        setComment([...comment, newCommentAdded]);
        setUserName([...userName, commentUsername]);
        toast.success('Comment Deleted Successfully');
        window.location.reload();
        setNewComment("");
        setCommentUser("");

        });

      }
        
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

  const clickComment = () => {
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
    <div className="singlePost">
      <div className="postToComment">
        <div className="posts" id='onePost'>         
            <div className="singletitle"><strong></strong><h4>{smisPostObject.title}</h4></div>
            <div className="singlebody">{smisPostObject.smisPosts}</div>
            <div className="singlefooter"><strong>Posted By : </strong>{smisPostObject.username}</div>
        </div>
      </div>
     
         <div className='formSize'>        
          <form onSubmit={sendComment}  
          onFocus={commentFocus}
          onKeyUp={commentStroke} 
          autoComplete="off" className="pt-5">
          {/* {!successful && ( */}
            <div>
              <div className="form-group" >
         
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  onChange={(event) => {setCommentUser(event.target.value)}}
                  value={commentUser} 
                  required  placeholder="Enter username"
                />
              </div>
              <div className="form-group">
                <textarea
                  type="text"
                  className="form-control"
                  name="comment" 
                  placeholder="Write your comment...."                  
                  required
                  onChange={(event) => {setNewComment(event.target.value)}}
                  value={newComment}
                />
              </div>
              {showButtons && (
            <div>
            <button className="btn btn-primary" disabled={enableButton} >Comment</button>
            <button className="btn btn-danger" disabled={enableButton}  
              onClick ={ () => {
                setShowButtons(false);
                setNewComment("");
                setCommentUser("");

              }} >Cancel</button>
            </div>
            )}
              
            </div>
        </form>
        </div>

        
      </div>
        </div>
        <div className="listOfComments" 
                   >  
               {comment.map((item, key) =>{
               return (
                  <div className="comment" key={key}  
                   onClick={clickComment}
                   >
                    <strong ></strong><br/>{item.username}
                    <strong ></strong><br/>{item.smisComments}
                    {showButtons && (
            <div>
            <button className="delbtn" 
                  
                  onClick={() =>deleteComment(item.smisCommentsId)}
                  
                   ><DeleteOutlinedIcon/></button>

            </div>
            )}
                  </div>
                  
                  ) }
               )  
                }                           
        </div>
    </div> 
)
}
export default PostComments

