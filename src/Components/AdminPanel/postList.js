import axios from "axios";
import React, {useEffect, useState} from "react";
import { toast } from "react-toastify";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router";




const PostList = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();


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
  const editComment = () => {
    navigate('/admin/editComments');

  }

  return (
    <div>
      <div className="container py-5 ">
      <hr />
      <div style={{textAlign: "right"}}>
        <Link to={"/admin/announcements"}> 
          <input type="button" value="Back" className="btn btn-primary btn-block" />
        </Link>
       
        
      </div>
      <hr/>
      <table className="table" >
        <thead>
          <tr>
            <th>No. </th>
            <th>Username</th>
            <th>Post Title</th>
            <th>Post Body</th>
            <th>Action</th>         
          </tr>
          </thead>
          <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.smisPostsId}>
                <th scope="row">{index+1}</th>
                <td>{item.username}</td>
                <td>{item.title}</td>
                <td>{item.smisPosts}</td>
              {/* <b>No data found to display.</b> */}
              <td>
                  <button className="btn btn-edit" onClick={editComment}><ModeEditIcon/></button>
                  <button className="btn btn-delete" onClick={() => deletePost(item.smisPostsId)}><DeleteOutlinedIcon /></button>
              </td>
            </tr>
            )
        })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default PostList; 