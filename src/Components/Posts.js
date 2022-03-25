import React, { Component } from 'react'

class Posts extends Component {
   
    //holding loading state and comments arrays
    constructor(props){
        super(props);

        this.state={
            comments: [],
            loading: false
        };
    }

  render(){
    return (
    <div className='container bg-light shadow mt-4'>
        <div>
      <h2>SCHOOLS DISCUSSIONS AND ANNOUNCEMENTS</h2>
      </div>
      {/* <header className="App-header">
          <h1 className="App-title">
            Comments
            <span className="px-2" role="img" aria-label="Chat">
              
            </span>
          </h1>
        </header> */}
      <div>
          <h1>postbody</h1>
      </div>
      <div className="">
          <div className="  pt-3 border-right">
                <h6>Say something about React</h6>
                <form>
                <input
                    autoComplete='false'
                    placeholder='write comment'
                />
                </form>
            </div>
            <div className="  pt-3 bg-white">
                comments list
            </div>
        </div>    
    </div>
  )}
}

export default Posts
