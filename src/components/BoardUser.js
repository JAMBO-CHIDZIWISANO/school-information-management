import React, {useEffect, useState} from 'react'
import Posts from './Posts'
import axios from 'axios'
import CommentForm from './usersComments/CommentForm'
import MessageScroll from './usersComments/MessageScroll'
 

const BoardUser = () => {

  //const [post, setPost] = useState([]);

  const [comment, setComment] = useState([]);

  // const loadPost = async ()=>{
  //   await axios.get("http://localhost:4000/api/smis/getAllPosts").
  //   then(response=>{
  //     setPost(response.data)
  //   });
  // }

  // useEffect(()=>{
  //   loadPost();
  // }, [])

  const loadComment = async () =>
  {
     axios.get("http://localhost:4000/api/smis/getAllComments")
    .then(response=>{
      setComment(response.data)
    });
  } 

  useEffect(() => {
    loadComment();
  }, []);



  return (
    <div className='container mt-4'>

      

    <div className='card-content'>
    {/* // {post.map(items => <h2 className='card-header'></h2>)} */}
      <div className='card-body'>
      {/* {post.map(items => <p className=''>{items.postBody}</p>)} */}
        <Posts />
        <CommentForm autoFocus={false} />
        <MessageScroll/>
        {
          comment.map((item)=>
          <h1>{item.postBody}...{item.commentBody}</h1>
          )
        }
        
      </div>
      </div>

    </div>
  )
}

export default BoardUser
