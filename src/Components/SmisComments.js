import axios from "axios";
import React, {useState, useEffect} from "react";
import { useParams, useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import '../smisPostsComments.css'

const SmisComments = () => {
  const navigate = useNavigate();
  // navigate('/home');
  const {smisPostsId} = useParams();
  const [data, setData] = useState([]);
  const [comment, setComment] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:4000/api/smis/getAllSmisPosts"); 
      setData(response.data);    
  };
//   const loadComment = async () => {
//     const response = await axios.get(`http://localhost:4000/api/smis/smisPosts/${smisPostsId}`); 
//     setComment(response.data);    
// };
  // refresh window

  useEffect(() => {
      loadData();
      // loadComment();
  }, []);

  
  return (
    <div className="postPage">
      <div className="allPosts">
        <div className="posts">
          {data.map((item, index) => {
            return (
              <div index={index} className="post" onClick={() => {navigate(`/postComments/${item.smisPostsId}`)}}>
                    <div className="singletitle"><strong>Post Subject :</strong><h4>{item.title}</h4></div>
                    <div className="singlebody">{item.smisPosts}</div>
                    <div className="singlefooter"><strong>Posted By : </strong>{item.username}</div>
                </div>               
            )
        })}
          </div>
         </div>
       
    </div>
  );
}

export default SmisComments