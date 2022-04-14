import React, {useEffect} from 'react'
import { useParams } from 'react-router-dom'


const PostComments = () => {
  const {smisPostsId} = useParams();


  return (
    <div>
      <h1>Should work {smisPostsId}</h1>
    </div>
  )
}

export default PostComments
