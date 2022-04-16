import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import '../smisPostsComments.css'


/// nnnnnnnnnnnnnnnn

import { useNavigate} from "react-router-dom";
import * as Yup from 'yup';

/// nnnnnnnnnnnnnnnnn

const PostComments = () => {

  const navigate = useNavigate();
  const {smisPostsId} = useParams();
  const {smisCommentsId} = useParams();
  const [smisPostObject, setSmisPostObject] = useState({});
  const [comment, setComment] = useState({});
  const [newComment, setNewComment] = useState("");

  useEffect( () => {
    axios.get(`http://localhost:4000/api/smis/smisPosts/${smisPostsId}`).then((response) => {
      setSmisPostObject(response.data) 
  });

  //   axios.get(`http://localhost:4000/api/smis/smisComments/${smisCommentsId}`).then((response) => {
  //     setComment(response.data)
  //  });
   
}, []);
    // now sending it to database usig post api
  const sendComment = () => {
    axios.post("http://localhost:4000/api/smis/addSmisComment", {
      smisComments: newComment, smisPostsId: smisPostsId }).then((response) => {
    // navigate('/viewcomments');
    // refreshing to add new comments automatically
    const newCommentAdded = {smisComments: newComment, smisPostsId: smisPostsId };
    setComment([...comment, newCommentAdded]);
    setNewComment("");
    });
  };
 
   
  const loadComment = async () => {
    const response = await axios.get(`http://localhost:4000/api/smis/smisComments/${smisPostsId}`);
    setComment(response.data);    
  };
  // refresh window

    useEffect(() => {
      loadComment();
    }, []);


  return (
    <div className='conatiner'>
    <div className="singlePost">
      
      <div className="postToComment">
        <div className="posts" id='onePost'>         
            <div className="singletitle"><strong></strong><h4>{smisPostObject.title}</h4></div>
            <div className="singlebody">{smisPostObject.smisPosts}</div>
            <div className="singlefooter"><strong>Posted By : </strong>{smisPostObject.username}</div>
        </div>
      </div>
        
      <div className="commentOnPost">
        <div className="addCommentContainer">
          <input className='commentInput' type="text" placeholder="Write your comment...." 
          autoComplete="off" onChange={(event) => {setNewComment(event.target.value)}}
          value={newComment} />
          <button className='commentbutton' onClick={sendComment}>Send Comment</button>
        </div>
        
        <div className="listOfComments"></div>
        
              {/* {comment.map((item, key) =>{ */}
                   <div className="comment">
                   <strong >ParentName Comment : </strong><br/>{comment.smisComments}
               </div>   
              {/* })} */}
                         
        
        </div>
    </div>
    </div>
  
  )
}

export default PostComments

