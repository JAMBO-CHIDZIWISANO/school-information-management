import React, { useEffect, useState, useRef, useContext } from 'react'
import InnerCommentForm from '../InnerCommentForm';
import SubComments from './SubComments';

import './Comment.css'

// displaying reply
const showReply = React.createContext();

export function useOpenReply() {
  return useContext(showReply);
}

const Comment = (props) => {

  // creating states for like icon and number of likes
  const likeIcon = useRef();
  const numberOfLikes = useRef();
  // creating states for uparrow and replies 
  const [upArrow, setUpArrow] = useState(false); 
  const [openReply, setOpenReply] = useState(false); 

  // creating event handlers
  // toggle when cancel button  and Reply button are pressed
  const changeOpenReply = ()=> {
    setOpenReply(prevState => prevState = !prevState);

  }
  // toggle up and down arrows
  let arrow = <i className='fas fa-caret-down'></i>
  
  const changeArrow = () => {
    setUpArrow(prevState => prevState = !prevState);
  }

  if (upArrow){
    arrow = <i className='fas fa-caret-up'></i>;
  }
  else {
    arrow = <i className='fas fa-caret-down'></i>
  }
  // like message
  let toggleLike = false;
  let likes = props.likes;
  const likeComment = () => {
    toggleLike = !toggleLike;
    // if toggleLike is true increment and change like colour if not decreament chaange colour to gray
    if(toggleLike){
      likes ++;
      likeIcon.current.style.color = "#4688de";
      }
      else{
        likes--;    
        likeIcon.current.style.color = "gray";    
      }
      numberOfLikes.current.innerHTML = likes;
  }

  const deleteMessage = () => {}

  return (
    <div>
    <section className='messageContainer'>
        <div className='messageUser'>{props.user}</div>
        <i class='fas fa-user-circle'></i>
        <div className='messageText'>{props.message}</div>
      <section  className='messageIconsContainer'>
        <i className='fas fa-thumbs-up' ref={likeIcon} onClick={likeComment}></i>
        <div>{props.likes}</div>
        <i class='fas fa-thumbs-down'></i>
        {
          !props.editable ? (
            <div style={{cursor: "pointer"}} onClick={changeOpenReply}>REPLY</div>
          ) : (
            <div style={{cursor: "pointer"}} onClick={deleteMessage} >DELETE</div>
          )
        }
      </section>
      <showReply.Provider value={changeOpenReply}>
        {openReply && <InnerCommentForm autoFocus={true} />}
      </showReply.Provider>
      <section className='arrowReplies' onClick={changeArrow}>
        {arrow}
        <div>View 4 replies</div>
      </section>
      {upArrow && (
      <section className='submessages'>
        <SubComments user="Dummy user reply" message="This is a dummy reply" likes={2} />
      </section>
      )}
    </section>
    </div>
  )
}

export default Comment