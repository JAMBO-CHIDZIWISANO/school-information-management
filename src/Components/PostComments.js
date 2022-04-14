import axios from 'axios';
import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'


const PostComments = () => {
  const {smisPostsId} = useParams();
  const [smisPostObject, setSmisPostObject] = useState({});

  useEffect( () => {
    axios.get(`http://localhost:4000/api/smis/smisPosts/${smisPostsId}`).then((response) => {
      setSmisPostObject(response.data) 
  });
});


  return (
    <div>
      <h1>Should work {smisPostsId}</h1>
    </div>
  )
}

export default PostComments
