import axios from "axios";
import React, {useEffect, useState} from "react";
import { toast } from "react-toastify";

const SmisComments = () => {
    const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:4000/api/smis/getAllSmisPosts");
      setData(response.data);    
  };
  // refresh window

      useEffect(() => {
          loadData();
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
      <table className="table">
        <thead>

          <tr>
            <th style={{textAlign: "center"}}>No. </th>
            <th style={{textAlign: "center"}}>Username</th>
            <th style={{textAlign: "center"}}>Post Title</th>
            <th style={{textAlign: "center"}}>Post Body</th>
            <th style={{textAlign: "center"}}>Action</th> 
                    
          </tr>
          </thead>

          <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.smisPostsId}>
                <th scope="row">{index+1}</th>
                <td>{item.username}</td>
                <td>{item.postTitle}</td>
                <td>{item.postBody}</td>
              {/* <b>No data found to display.</b> */}
              <td>
                  <button className="btn btn-edit" >Edit</button>
                  <button className="btn btn-delete" onClick={() => deletePost(item.smisPostsId)}>Delete</button>
              </td>
  
          </tr>
            )
        })}
        </tbody>
      </table>
        <div className="commentsRightside">
          <div className="addCommentContainer">
            <input type="text" placeholder="comment...." autoComplete="off" />
            <button>Add Comment</button>
          </div>

          <div className="listOfComments"></div>
        </div>
    </div>
  );
}

export default SmisComments