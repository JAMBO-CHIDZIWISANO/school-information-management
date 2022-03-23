import axios from "axios";
import React, {useEffect, useState} from "react";

const PostList = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:4000/api/smis/getAllPosts");
      setData(response.data);    
  };
  // refresh window
  // useEffect(() => {
  //   axios.get('http://localhost:4000/api/smis/getAllPosts').then(res => {
  //     setPostsList(res.data.data);
  //   }).catch(err => console.log("Couldn't fetch data. Error: " + err))

  // }, []);
      useEffect(() => {
          loadData();
      }, []);

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
             
                    <button className="btn btn-view" >View</button>
            
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
