import axios from "axios";
import React, {useEffect, useState} from "react";
import { toast } from "react-toastify";


const PostList = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:4000/api/smis/getAllPosts");
      setData(response.data);    
  };
  // refresh window

      useEffect(() => {
          loadData();
      }, []);
    
  // deleting user
  const deletePost = (postId) => {
    if (window.confirm("Are you sure you want to delete this User ?")
    ) {
      axios.delete(`http://localhost:4000/api/smis/post/${postId}`);
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
            <th style={{textAlign: "center"}}>Post Title</th>
            <th style={{textAlign: "center"}}>Post Body</th>
            <th style={{textAlign: "center"}}>Action</th> 
                    
          </tr>
          </thead>

          <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.postId}>
                <th scope="row">{index+1}</th>
                <td>{item.postTitle}</td>
                <td>{item.postBody}</td>
              {/* <b>No data found to display.</b> */}
              <td>
                    <button className="btn btn-edit" >Edit</button>
                    <button className="btn btn-delete" onClick={() => deletePost(item.id)}>Delete</button>

            
              </td>
          
          </tr>
            )
        })}
        </tbody>
      </table>

    </div>
  );
}

export default PostList; 
