import axios from "axios";
import React, {useEffect, useState} from "react";
import { toast } from "react-toastify";

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

  // deleting user
  const deletePost = (smisPostsId) => {
    if (window.confirm("Are you sure you want to delete this User ?")
    ) {
      axios.delete(`http://localhost:4000/api/smis/smisPost/${smisPostsId}`);
      toast.success("User Deleted Successfully");
      // refreshing the window
      setTimeout(() => loadData(), 500);
    }
};

  return (
    <div>
      <div className="posts">
      {data.map((item, index) => {
            return (
                <div index={index} className="post">
                  <div className="title">Post Title : <h3>{item.username}</h3></div>
                    <div className="body">Post Subject :<h3>{item.title}</h3></div>
                    <div className="footer">Post Body : <h3>{item.smisPosts}</h3></div>
                    
                </div>               
            )
        })}
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
                    Comments :<h3>{item.smisComments}</h3>
                </div>               
            )
        })}
        </div>
    </div>
  );
}

export default SmisComments