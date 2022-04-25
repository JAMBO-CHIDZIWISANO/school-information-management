import axios from 'axios';
import React, {useEffect, useState, useRef} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import '../smisPostsComments.css'
import { Link } from 'react-router-dom';
import authservice from './services/auth.service'

const PostComments = (props) => {

    const navigate = useNavigate();
    const {smisPostsId} = useParams();
    const {smisCommentsId} = useParams();
    const [smisPostObject, setSmisPostObject] = useState({});
    const [comment, setComment] = useState([]);
    const [newComment, setNewComment] = useState("");
  
    const [userName, setUserName] = useState([]);
    const [commentUser, setCommentUser] = useState("");
    
    const user = authservice.getCurrentUser();

    
    
    // const onChangeGender = (e) => {
    //   const gender = e.target.value;
    //   setGender(gender);
    // };
  
    
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
        // navigate('/viewcomments');
        // refreshing to add new comments automatically
        const newCommentAdded = {smisComments: newComment};
        const commentUsername =  {username: commentUser};
        
        setComment([...comment, newCommentAdded]);
        setUserName([...userName, commentUsername]);
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

  const editComment = () => {
    navigate('/admin/editComments');
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
      <div className="commentOnPost">
        <div className="addCommentContainer control" 
          onFocus={commentFocus}
          onKeyUp={commentStroke}>



<form onSubmit={sendComment} autoComplete="off" className="form-inline">
          {/* {!successful && ( */}
            <div>
              <div className="form-group" >
                <label htmlFor="username">Username</label>
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
                <label htmlFor="comment"></label>
                <textarea
                  type="text"
                  className="form-control"
                  name="comment"                  
                  required
                  onChange={(event) => {setNewComment(event.target.value)}}
                  value={newComment}
                />
              </div>
             
              <div className="form-group">
                <button className="btn btn-primary btn-block">send comment</button>
              </div>
            </div>
          {/* )}
          {message && (
            <div className="form-group">
              <div
                className={ successful ? "alert alert-success" : "alert alert-danger" }
                role="alert"
              >
                {message}
              </div>
            </div>
          )} */}
        </form>
      </div>
    

            
       
    

{/*             
             <input name='username' 
              className='form-control form-control-lg'
             
              onChange={(event) => {setCommentUser(event.target.value)}}
              value={commentUser} 
              placeholder="Write your Username..."
              />
       
          <textarea  type="text" placeholder="Write your comment...." 
          autoComplete="off" onChange={(event) => {setNewComment(event.target.value)}}
          value={newComment}  ref={message}
          className='form-control form-control-lg'

          /> */}
        
           
         
        </div>
        <div className="listOfComments"  >  
               {comment.map((item, key) =>{
               return (
                  <div className="comment" key={key} >
                    <strong ></strong><br/>{item.username}
                    <strong ></strong><br/>{item.smisComments}
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
export default PostComments

