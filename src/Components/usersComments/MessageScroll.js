import React from 'react'
import Comment  from './comments/Comment'
import './comments.css'

const MessageScroll = (props) => {
  return (
    <>
        <Comment />
        <div className='bottomBar'>
            <div className='loader'></div>
        </div>
    </>
  )
}

export default MessageScroll