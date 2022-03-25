import axios from 'axios';
import React, { Component } from 'react'
import PostList from './postList';
class Announcements extends Component {


  constructor(props){
    super(props);
    this.onChangePostId = this.onChangePostId.bind(this);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePostBody = this.onChangePostBody.bind(this);
    this.onChangeTeacherId = this.onChangeTeacherId.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      postId:"",
      postTitle: "",
      postBody: "",
      teacherId:""
    }
  }

  onChangePostId(e){
    this.setState({postId: e.target.value})
  }
  onChangeTitle(e){
    this.setState({ postTitle: e.target.value})
  }
  onChangePostBody(e){
    this.setState({postBody: e.target.value})
  }
  onChangeTeacherId(e){
    this.setState({teacherId: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
    const data = {
      postId: this.state.postId,
      postTitle: this.state.postTitle,
      postBody: this.state.postBody,
      teacherId: this.state.teacherId
    };

    axios.post("http://localhost:4000/api/smis/addPost", data)
      .then((res)=>{
        console.log(res.data)
      }).catch((error)=>{
        console.log(error)
      });
    this.setState({
      postId: "",
      postTitle: "",
      postBody: "",
      teacherId: ""
    })
  } 

  //retrieve post arrays
  state = {
      posts: []
  }

  componentDidMount() {
    axios.get('https://localhost:4000/api/smis/getAllPosts')
    .then(res => {
      const posts = res.data
      this.setState({posts})
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
  }

  render(){

  return (
    <div>
      <div className='px-5 wrapper mt-4 '>
        <form onSubmit={this.onSubmit} className=' mt-4'>

          <div className='form-group'>
            <label htmlFor='postId'>Id</label>
            <input   
              name='postId'
              value={this.state.postId}
              onChange={this.onChangePostId}
              className='form-control form-control-sm mt-2'
              id='postId'
              placeholder='postId'/>
          </div>

          <div className='form-group'>
            <label htmlFor='postTitle'>Title</label>
            <input   
              name='postTitle'
              value={this.state.postTitle}
              onChange={this.onChangeTitle}
              className='form-control form-control-sm'
              id='postTitle'
              placeholder='postTitle'/>
          </div>

          <div className='form-group'>
            <label htmlFor='postBody'>post Body</label>
            <textarea
              name='postBody'
              value={this.state.postBody}
              onChange={this.onChangePostBody}
              className='form-control form-control-lg'
              id='postBody'
              placeholder='post body'/>
          </div>

          <div className='form-group'>
            <label htmlFor='teacherId'>Who post code: </label>
            <input
              name='teacherId'
              value={this.state.teacherId}
              onChange={this.onChangeTeacherId}
              className='form-control form-control-sm'
              id='teacherId'
              placeholder="posters` id"/>
          </div>

          <div>
            <input 
              type="submit" 
              value="create post" 
              className="btn btn-primary btn-block" />
            </div>
          </form>
      </div>

      <div>
        <PostList/>

      </div>

      <div>

      </div>

    </div>
  )}
}

export default Announcements
 