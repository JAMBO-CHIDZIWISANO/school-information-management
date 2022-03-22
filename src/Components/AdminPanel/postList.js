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
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Body</th>
          <th>post By</th>
        </tr>
        </thead>
        <tbody>
          
        </tbody>
      </table>

    </div>
  );
}

export default PostList; 
