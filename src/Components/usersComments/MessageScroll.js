import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Comment  from './comments/Comment';
import './comments.css';
import AuthService from "../services/auth.service";


const MessageScroll = (props) => {

  // setting states 
  const [messages, setMessages] = useState([]);
  const [showBottomBar, setShowBottomBar] = useState(true);
  // 
  // axios.post("http://localhost:4000/api/smis/addComment", messages)
  //   .then((res)=>{
  //     console.log(res.data)
  //   }).catch((error)=>{
  //     console.log(error)
  //   })          
   
  //loading comments either on app start or when new comment is added
  const loadMessages = async () => {
    const response = await axios.get("http://localhost:4000/api/smis/getAllComments");
    setMessages(response.data);
    
  };
  // refreshing the window
  useEffect(() => {
    loadMessages();
    setShowBottomBar(true);
  }, []);

// class Profile extends Component {
//   constructor(props) {
//     super(props);
  
//     this.state = {
//       currentUser: AuthService.getCurrentUser()
//       };
//     }
  
// render() {
//   const { currentUser } = this.state;

  
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
  let user = JSON.parse(localStorage.getItem('user'));
  let username = JSON.parse(localStorage.getItem('username'));


  const { id: userId } =(user);
  console.log("this is "+JSON.stringify(user));
  console.log("this is "+JSON.stringify(username));

  return (
  <>
      <Comment user={JSON.stringify(user)} editable={false} message={messages} likes={25} />
      <div className='bottomBar'>  <div className='loader'></div> </div> 
    {/* using dynamic data from database instead of the above dummy data above*/}
  {/* {messages.map(message => (
    <Comment key={message._id} useKey={message._id}
    user={message.user} editable={message.editable}
    message={message.message} likes={message.likes}
    replies = {message.replies} 
    /> */}

{/* 
  ))} */}
   {messages.map((item, index) => {
            return (
                
                    <Comment key={item.commentBody} />
                   
                            
            )
        })}
    {messages.length > 9 && showBottomBar ? <div className='bottomBar'>  <div className='loader'></div> </div>: null}
  </>
  )
}


export default MessageScroll