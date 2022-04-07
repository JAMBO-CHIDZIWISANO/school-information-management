import axios from 'axios';
import React, { Component } from 'react'
import {Link} from "react-router-dom";

class SmisPosts extends Component {

  constructor(props){
    super(props);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangeSmisPosts = this.onChangeSmisPosts.bind(this);
       
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      username: "",
      title: "",
      smisPosts: "",
    }
  }
 
  onChangeUsername(e){
    this.setState({ username: e.target.value})
  }
  onChangeTitle(e){
    this.setState({ title: e.target.value})
  }
  onChangeSmisPosts(e){
    this.setState({ smisPosts: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
    const data = {
        username: this.state.username,
        title: this.state.title,
        smisPosts: this.state.smisPosts,
    };
    console.log(data);

    axios.post("http://localhost:4000/api/smis/addSmisPosts", data)
      .then((res)=>{
        console.log(res.data)
      }).catch((error)=>{
        console.log(error)
      });

    this.setState({
      username: "",
      title: "",  
      smisPosts: "", 
    })
  } 

  //retrieve subjects arrays and display them
  state = {
    smisPosts: []
  }

  componentDidMount() {
    axios.get('https://localhost:4000/api/smis/getAllSmisPosts')
    .then(res => {
      const posts = res.data
      this.setState({posts})
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
  }

  render(){

  return (

    <div>

      {/* buttons for navigating to manage posts and view posts */}
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
      <div className='px-5 wrapper mt-4 '>
        <form onSubmit={this.onSubmit} className='col-md-4'>
        <div className='subject'><h3>Create Post</h3><hr/></div>
          <div className='form-group'>
            <strong>Username</strong>
            <input name='username' value={this.state.username}
              onChange={this.onChangeUsername}
              className='form-control form-control-sm'
              Code='subjectCode' placeholder="Username..."/>
          </div>

          <div className='form-group'>
            <strong >Title</strong>
            <input  name='title' value={this.state.title}
              onChange={this.onChangeTitle}
              className='form-control form-control-sm'
              id='title' placeholder='Post title'/>
          </div>  
          <div className='form-group'>
            <strong >Post Body</strong>
            <input  name='smisposts' value={this.state.smisPosts}
              onChange={this.onChangeSmisPosts}
              className='form-control form-control-sm'
              id='smisposts' placeholder='Post body'/>
          </div>         

          <div>
            <input 
              type="submit"  value="Submit" 
              className="btn btn-primary btn-block" />
            </div>
          </form>
        </div>
      <div>
    </div>
      <hr />
    </div>
  )}
}

export default SmisPosts
 