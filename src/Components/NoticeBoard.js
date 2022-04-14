import React from 'react'
import Sms from './Sms'
import SmisPosts from './SmisPosts'
import PostList from './AdminPanel/postList'
import { Link } from 'react-router-dom'
const NoticeBoard = () => {
  return (
    <div className='container'>
        <hr />
      <div style={{textAlign: "right"}}>
        <Link to={"/view-posts"}> 
          <input type="button" value="View Posts" className="btn btn-primary btn-block" />
        </Link>
        <Link to={"/admin/manage-posts"}> 
          <input type="button" value="Manage Posts" className="btn btn-primary btn-block" />
        </Link>
      </div>
      <hr/>

        <div className='row'>

            <div className='col-12 col-md-6 col-lg-6'> 
                <SmisPosts/>
            </div>
            <div className='col-12 col-md-6 col-lg-6'> 
                < Sms/>
            </div>
         
        </div>
        <div>
            <PostList/>
        </div>
      
    </div>
  )
}

export default NoticeBoard
