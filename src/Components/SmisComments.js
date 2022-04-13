import axios from "axios";
import React, {useEffect, useState} from "react";
import { toast } from "react-toastify";
import '../smisPostsComments.css'

const SmisComments = () => {
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:4000/api/smis/getAllSmisPosts"); 
      setData(response.data);    
  };
  const loadComment = async () => {
    const response = await axios.get("http://localhost:4000/api/smis/getAllSmiscomments"); 
    setComment(response.data);    
};
  // refresh window

  useEffect(() => {
      loadData();
      loadComment();
  }, []);

  
  return (
    <div className="postPage">
      <div className="leftSide">
        <div className="posts">
          {data.map((item, index) => {
            return (
                <div index={index} className="post">
                  <div className="title"><strong>Post Created By :</strong>{item.username}</div>
                    <div className="body"><strong>Post Subject :</strong><br/><h4>{item.title}</h4></div>
                    <div className="footer">{item.smisPosts}</div>
                </div>               
            )
        })}
          </div>
         </div>
       
        <div className="rightSide">
          <div className="addCommentContainer">
            <input type="text" placeholder="comment...." autoComplete="off" />
            <button>Add Comment</button>
          </div>
          <div className="listOfComments"></div>
          {comment.map((item, index) => {
            return (
                <div index={index} className="comment">
                    <strong>List of Comments :</strong><h3>{item.smisComments}</h3>
                </div>               
            )
        })}
        </div>
    </div>
  );
}

export default SmisComments