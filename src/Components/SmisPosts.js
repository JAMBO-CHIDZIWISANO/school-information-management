import axios from 'axios';
import React, { Component } from 'react'


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

    <div className='container'>

      <form onSubmit={this.onSubmit} className=''>
        
        <div className='create-post'>
          <h1>Create Post</h1><hr/>
        </div>
        
        <div class="form-group">
            <label>Username</label>
            <input 
              name='username' 
              value={this.state.username}
              onChange={this.onChangeUsername}
              className='form-control'
              id='username' 
              placeholder="Username..."
            />
        </div>

        <div className='form-group'>
          <label >Title</label>
          <input  
            name='title' 
            value={this.state.title}
            onChange={this.onChangeTitle}
            className='form-control '
            id='title' 
            placeholder='Post title'
          />
        </div>

        <div className='form-group'>
          <label >Post Body</label>
          <textarea  
            name='smisposts' 
            value={this.state.smisPosts}
            onChange={this.onChangeSmisPosts}
            className='form-control'
            id='smisposts' 
            placeholder='Post body'
          />
        </div>

        <div>
          <button className="btn btn-primary btn-block" >submit</button>
        </div>
      </form>
      
    </div>
  )}
}

export default SmisPosts
 