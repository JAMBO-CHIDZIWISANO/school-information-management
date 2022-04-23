import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import '../smisPostsComments.css'

//

import { useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

/// nnnnnnnnnnnnnnnnn

const PostComments = () => {

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
        <div className="addCommentContainer">
          <input className='commentInput' type="text" placeholder="Write your comment...." 
          autoComplete="off" onChange={(event) => {setNewComment(event.target.value)}}
          value={newComment} />
          <button className='commentbutton' onClick={sendComment}>Send Comment</button>
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

export default PostComments

