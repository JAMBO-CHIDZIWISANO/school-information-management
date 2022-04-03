import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment  from './comments/Comment';
import './comments.css';

const MessageScroll = (props) => {

  // setting states 
  const [messages, setMessages] = useState([]);
  const [showBottomBar, setShowBottomBar] = useState(true);
  //loading first 10 comments either on app start or when new comment is added
  const loadMessages = async () => {
    const response = await axios.get("http://localhost:4000/api/smis/getAllComments");
    setMessages(response.data);
    
  };
  // refreshing the window
  useEffect(() => {
    loadMessages();
    setShowBottomBar(true);
  }, []);

    // useEffect( () => {
    //   setShowBottomBar(true);
    // // fetching data from database 
    //   fetch("/get-data", {
    //     method: "POST",
    //     headers: {"Content-type":"application/json"},
    //     body:JSON.stringify({limitNum:10})
    //   }).then(res => {
    //     setMessages(comments);
    //   })
    // }, [])

  return (
  <>
      <Comment user="Dummy user" editable={false} message="This is a Dummy message" likes={25} />
      <div className='bottomBar'>  <div className='loader'></div> </div> 
    {/* using dynamic data from database instead of the above dummy data above*/}
  {messages.map(message => (
    <Comment key={message._id} useKey={message._id}
    user={message.user} editable={message.editable}
    message={message.message} likes={message.likes}
    replies = {message.replies} 
    />

  ))}
    {messages.length > 9 && showBottomBar ? <div className='bottomBar'>  <div className='loader'></div> </div>: null}
  </>
  )
}

export default MessageScroll