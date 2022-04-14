import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import {Link} from "react-router-dom";
import * as Yup from 'yup';

const SmisPosts = () => {
  const initialValues = {
    title: "",
    smisPosts: "",
    username: "",  
  };

  // form validation using yup library by defining the required inputs or variable
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must type a Title for your Post"),
    smisPosts: Yup.string().required("Type Full post Here"),
    username: Yup.string().min(3).max(15).required("Enter username as provided by Admin"), 
  });
  //creating onSubmit function and will pass data as an argument from formik
  const onSubmit = (data) => {
    // viewing this in console
    console.log(data)
    // now sending it to database usig post api
    axios.post("http://localhost:4000/api/smis/addSmisPosts", data).then((response) => {
      console.log(response.data)

    })
    

    this.setState({
      username: "",
      title: "",  
      smisPosts: "", 
    })
  }

  return (
    <div>
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
        
        </div>
        <div className='createPostPage'>
          
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
              <Form className="formContainer">
                  <strong>Title</strong>
                  {/* displaying error messages between label and input fields */}
                  <ErrorMessage name="title" component="span" /> 
                  <Field
                  id="inputCreatePost"
                  name = "title"
                  placeholder="Post title"
                  />
                  <strong>Post</strong>
                  <ErrorMessage  name="smisPosts" component="span" /> 
                  <Field
                  id="inputCreatePost"
                  name = "smisPosts"
                  placeholder="Type full Post body"
                  />
                  <strong>Username</strong>  
                  <ErrorMessage  name="username" component="span" />       
                  <Field
                  id="inputCreatePost"
                  name = "username"
                  placeholder="Your username"
                  />
                  <button type='submit'>Post</button>
              </Form>
          </Formik>
        </div>




    </div>
  )
}

export default SmisPosts
 
//   constructor(props){
//     super(props);
//     this.onChangeUsername = this.onChangeUsername.bind(this);
//     this.onChangeTitle = this.onChangeTitle.bind(this);
//     this.onChangeSmisPosts = this.onChangeSmisPosts.bind(this);
       
//     this.onSubmit = this.onSubmit.bind(this);
//     this.state = {
//       username: "",
//       title: "",
//       smisPosts: "",
//     }
//   }
 
//   onChangeUsername(e){
//     this.setState({ username: e.target.value})
//   }
//   onChangeTitle(e){
//     this.setState({ title: e.target.value})
//   }
//   onChangeSmisPosts(e){
//     this.setState({ smisPosts: e.target.value})
//   }

//   onSubmit(e){
//     e.preventDefault()
//     const data = {
//         username: this.state.username,
//         title: this.state.title,
//         smisPosts: this.state.smisPosts,
//     };
//     console.log(data);

//     axios.post("http://localhost:4000/api/smis/addSmisPosts", data)
//       .then((res)=>{
//         console.log(res.data)
//       }).catch((error)=>{
//         console.log(error)
//       });

//     this.setState({
//       username: "",
//       title: "",  
//       smisPosts: "", 
//     })
//   } 

//   //retrieve subjects arrays and display them
//   state = {
//     smisPosts: []
//   }

//   componentDidMount() {
//     axios.get('https://localhost:4000/api/smis/getAllSmisPosts')
//     .then(res => {
//       const posts = res.data
//       this.setState({posts})
//     })
//     .catch(err => console.log("Couldn't fetch data. Error: " + err))
//   }

//   render(){

//   return (

//     <div>

//       <div className="d-flex justify-content-center aligh-items-center">
        
//         <form onSubmit={this.onSubmit} className='col-md-4'>
//         <div className='create-post'><h3>Create Post</h3><hr/></div>
          

//           <div className='form-group'>
//             <strong >Title</strong>
//             <input  name='title' value={this.state.title}
//               onChange={this.onChangeTitle}
//               className='form-control form-control-lg'
//               id='title' placeholder='Post title'/>
//           </div>  
//           <div className='form-group'>
//             <strong >Post Body</strong>
//             <input  name='smisposts' value={this.state.smisPosts}
//               onChange={this.onChangeSmisPosts}
//               className='form-control form-control-lg'
//               id='smisposts' placeholder='Post body'/>
//           </div> 
//           <div class="form-outline">
//             <strong>Username</strong>
//             <input name='username' value={this.state.username}
//               onChange={this.onChangeUsername}
//               className='form-control form-control-lg'
//               Code='username' placeholder="Username..."/>
//           </div>        

//           <div>
//             <input 
//               type="submit"  value="Submit" 
//               className="btn btn-primary btn-block" />
//             </div>
//           </form>
//         </div>
//       <div>
//     </div>
//       <hr />
//     </div>
//   )}
