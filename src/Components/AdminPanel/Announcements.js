import axios from 'axios';
import React, { Component } from 'react'
import PostList from './postList';
import SmisPosts from '../SmisPosts'


class Announcements extends Component {


  constructor(props){
    super(props);
    this.onChangeTitle = this.onChangeTitle.bind(this);
    this.onChangePostBody = this.onChangePostBody.bind(this);
    this.onChangeTeacherId = this.onChangeTeacherId.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      postTitle: "",
      postBody: "",
      teacherId:""
    }
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
      
      <div>
        <SmisPosts />
        <PostList/>
      </div>
    </div>
  )}
}

export default Announcements
 