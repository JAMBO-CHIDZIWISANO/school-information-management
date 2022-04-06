import React, { Component } from 'react'
import axios from 'axios';

class Posts extends Component {
 

    //holding loading state and comments arrays
    constructor(props){
      super(props);

      this.handleTeacherIdChange = this.handleTeacherIdChange.bind(this);
      this.handleCommentChange = this.handleCommentChange.bind(this);
      this.onSubmit = this.onSubmit.bind(this);

      this.state = {
        teacherId: "",
        commentBody: ""
      };   


    }

    //handle form input field changes and update state
    handleTeacherIdChange(e){
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

  //   state = {
  //     data : []
  //   }

  //   async componentDidMount() {
  //      axios.get("http://localhost:4000/api/smis/gtAllComments")
  //      .then(response=>{
  //       this.setState({data:response.data});
  //       console.log(response)
  //     }).catch(function (error){
  //       console.log(error)
  //     })
                 
  // }


  render(){
    return (
      <div>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <input
            onChange={this.handleTeacherIdChange}
            value={this.state.teacherId}
            className="form-control"
            placeholder="😎 Your username"
            name="teacherId"
            type="text"
            autoComplete='false'
          />
        </div>

        <div className="form-group mt-3">
          <input
            onChange={this.handleCommentChange}
            value={this.state.commentBody}
            className="form-control"
            placeholder="write Your Comment"
            name="commentBody"
            rows="5"
            autoComplete='false'
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
