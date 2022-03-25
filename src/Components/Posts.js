import React, { Component } from 'react'
import axios from 'axios';
class Posts extends Component {
   
    //holding loading state and comments arrays
    constructor(props){
      super(props);

      this.handleUsernameChange = this.handleUsernameChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        teacherId: "",
        commentBody: ""
      };   
    }

    //handle form input field changes and update state
    handleUsernameChange(e){
      this.setState({ teacherId: e.target.value});
    };

    handleCommentChange(e){
     this.setState({ commentBody: e.target.value});
    };

    //Form submit handler
    onSubmit(e){
      // prevent default form submission
      e.preventDefault();

      const data = {
        teacherId: this.state.teacherId,
        commentBody: this.state.commentBody,
      };

    axios.post("http://localhost:4000/api/smis/addComment", data)
    .then((res)=>{
      console.log(res.data)
    }).catch((error)=>{
      console.log(error)
    })
      
          
        // clear the message box
        this.setState({
          teacherId: "",
          commentBody: ""
        });
   
    }


  render(){
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            onChange={this.handleUsernameChange}
            value={this.state.teacherId}
            className="form-control"
            placeholder="😎 Your username"
            name="teacherId"
            type="text"
          />
        </div>

        <div className="form-group">
          <textarea
            onChange={this.handleCommentChange}
            value={this.state.commentBody}
            className="form-control"
            placeholder="🤬 Your Comment"
            name="commentBody"
            rows="5"
          />
        </div>

       

        <div className="form-group">
          <button className="btn btn-primary">
            Comment &#10148;
          </button>
        </div>
      </form>
    </div>
)}
}

export default Posts
