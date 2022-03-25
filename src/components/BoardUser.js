import React from 'react'
import Posts from './Posts'

import CommentForm from './usersComments/comments/CommentForm'
 

const BoardUser = () => {
  return (
    <div className='container mt-4'>
      <Posts />
      <CommentForm />

    </div>
  )
}

export default BoardUser
