import axios from 'axios';
import React, { Component } from 'react'
import {Link} from "react-router-dom";
import SubjectList from './SubjectList';

class AddSubject extends Component {

  constructor(props){
    super(props);
    this.onChangeSubjectCode = this.onChangeSubjectCode.bind(this);
    this.onChangeSubjectName = this.onChangeSubjectName.bind(this);
       
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      subjectCode: "",
      subjectName: "", 
    }
  }
 
  onChangeSubjectCode(e){
    this.setState({ subjectCode: e.target.value})
  }
  onChangeSubjectName(e){
    this.setState({subjectName: e.target.value})
  }

  onSubmit(e){
    e.preventDefault()
    const data = {
      subjectCode: this.state.subjectCode,
      subjectName: this.state.subjectName,
    };
    console.log(data);

    axios.post("http://localhost:4000/api/smis/AddSubject", data)
      .then((res)=>{
        console.log(res.data)
      }).catch((error)=>{
        console.log(error)
      });

    this.setState({
      subjectCode: "",
      subjectName: "",
      
    })
  } 

  //retrieve subjects arrays and display them
  state = {
      subjects: []
  }

  componentDidMount() {
    axios.get('https://localhost:4000/api/smis/getAllSubjects')
    .then(res => {
      const posts = res.data
      this.setState({posts})
    })
    .catch(err => console.log("Couldn't fetch data. Error: " + err))
  }

  render(){

  return (

    <div>

      {/* buttons for navigating to manage subjects and view subjects pages class */}
      <hr />
      <div style={{textAlign: "right"}}>
        <Link to={"/view-subjects"}> 
          <input type="button" value="View Sujects" className="btn btn-primary btn-block" />
        </Link>
        <Link to={"/admin/manage-subjects"}> 
          <input type="button" value="Manage Sujects" className="btn btn-primary btn-block" />
        </Link>
      </div>
      <hr/>
      <div className='px-5 wrapper mt-4 '>
        <form onSubmit={this.onSubmit} className='col-md-3'>
        <div className='subject'><h3>Add Subject</h3><hr/></div>
          <div className='form-group'>
            <strong>Subject Code</strong>
            <input name='subjectCode' value={this.state.subjectCode}
              onChange={this.onChangeSubjectCode}
              className='form-control form-control-sm'
              Code='subjectCode' placeholder="Subject Code..."/>
          </div>

          <div className='form-group'>
            <strong >Subject Name</strong>
            <input  name='subjectName' value={this.state.subjectName}
              onChange={this.onChangeSubjectName}
              className='form-control form-control-sm'
              id='subjectName' placeholder='Subject Name'/>
          </div>         

          <div>
            <input 
              type="submit"  value="Submit Subject" 
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

export default AddSubject
 