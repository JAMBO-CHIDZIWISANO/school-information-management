import axios from 'axios';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate} from "react-router-dom";
import * as Yup from 'yup';
import React from 'react'


const SmisPosts = () => {

  // defining navigation to posts
  const navigate = useNavigate();
  const initialValues = {
    title: "",
    smisPosts: "",
    username: "",  
  };

  // form validation using yup library by defining the required inputs or variable
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must type a Title for your Post"),
    smisPosts: Yup.string().min(2).max(100).required("Type Full post Here"),
    username: Yup.string().min(3).max(15).required("Enter username as provided by Admin"), 
  });
  //creating onSubmit function and will pass data as an argument from formik
  const onSubmit = (data) => {
    // viewing this in console
    console.log(data)
    // now sending it to database usig post api
    axios.post("http://localhost:4000/api/smis/addSmisPosts", data).then((response) => {
      // navigate('/viewcomments');


    })
  };



  return (
    <div>  
        <div className='createPostPage'>
          <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                
              <Form className="formContainer">
              <h2 className='text-center'> Create Post</h2>
                <hr/>
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
                  <button type='submit' className='btn btn-primary'>Post</button>
              </Form>
          </Formik>
        </div>
      
    </div>
  )
}

export default SmisPosts
 