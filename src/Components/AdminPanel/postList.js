import axios from "axios";
import React, {useEffect, useState} from "react";
function PostList() {
  const [postsList, setPostsList] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/api/smis/getAllPosts').then(res => {
      setPostsList(res.data.data);
    }).catch(err => console.log("Couldn't fetch data. Error: " + err))

  }, []);

  return (
    <div className="container-fluid p-3">
      <table className="table table-sm mt-3">
        <thead className="thead-dark">
{/* <<<<<<< Updated upstream
=======
// <<<<<<< HEAD */}
          <tr>
          <th style={{textAlign: "center"}}>No. </th>
          <th style={{textAlign: "center"}}>posstTitle</th>
          <th style={{textAlign: "center"}}>postBody</th>
          <th style={{textAlign: "center"}}>teacherId</th>
          <th style={{textAlign: "center"}}>PostId</th>
          <th style={{textAlign: "center"}}>Action</th>
                     
                    
          </tr>
          </thead>
        
          {postsList.map((item, index) => {
            return (
              <tr key={item.postId}>
                <th scope="row">{index+1}</th>
                <td>{item.posstTitle}</td>
                <td>{item.postBody}</td>
                <td>{item.teacherId}</td>
           
            <td className="text-center" colSpan="4">
              <b>No data found to display.</b>
            </td>
          </tr>
            )
        })}
    <thead>
{/* >>>>>>> Stashed changes */}
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>post By</th>
        </tr>
        </thead>
        <tbody>
          
{/* <<<<<<< Updated upstream
=======
>>>>>>> beb8eb4e37f71e3f3207ca88de921a5d0e595112
>>>>>>> Stashed changes */}
        </tbody>
      </table>

    </div>
  );
}

export default PostList; 
