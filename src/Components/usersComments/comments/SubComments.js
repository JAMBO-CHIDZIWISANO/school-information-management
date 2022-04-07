import React, { useEffect, useState, useRef, useContext } from 'react'
import InnerCommentForm from '../InnerCommentForm';
import SubCommentsForm from '../SubCommentsForm';

// import * as AiIcons from "react-icons/ai";   
import './Comment.css'

// displaying reply
const showReply = React.createContext();

export function useOpenReply() {
    return useContext(showReply);
}

const SubComments = (props) => {

    // creating states for like icon and number of likes
    const likeIcon = useRef();
    const numberOfLikes = useRef();
    // creating states for uparrow and replies 
    const [openReply, setOpenReply] = useState(false); 

    // creating event handlers
    // toggle when cancel button  and Reply button are pressed
    const changeOpenReply = ()=> {
    setOpenReply(prevState => prevState = !prevState);
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
        <>
        <section className='messageContainer'>
            <div className='messageUser'>{props.user}</div>
            <i className='fas fa-user-circle'></i>
            <div className='messageText'>{props.message}</div>
          <section  className='messageIconsContainer'>
            <i className='fas fa-thumbs-up' ref={likeIcon} onClick={likeComment}></i>
            <div>{props.likes}</div>
            <i className='fas fa-thumbs-down'></i>
            {
              !props.editable ? (
                <div style={{cursor: "pointer"}} onClick={changeOpenReply}>REPLY</div>
              ) : (
                <div style={{cursor: "pointer"}} onClick={deleteMessage} >DELETE</div>
              )
            }
          </section>
          <showReply.Provider value={changeOpenReply}>
            {openReply && <SubCommentsForm autoFocus={true} />}
          </showReply.Provider>
                    
        </section>
        </>
      )
    }
    
export default SubComments