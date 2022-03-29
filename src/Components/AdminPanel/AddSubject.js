import axios from 'axios';
import React, { Component } from 'react'
import SubjectList from './SubjectList';

class AddSubject extends Component {

  constructor(props){
    super(props);
    this.onChangeSubjectCode = this.onChangeSubjectCode.bind(this);
    this.onChangeSubjectName = this.onChangeSubjectName.bind(this);
    this.onChangeClassName = this.onChangeClassName.bind(this);
    this.onChangeSchoolTerm = this.onChangeSchoolTerm.bind(this);
    
    
    this.onSubmit = this.onSubmit.bind(this);
    this.state = {
      subjectCode: "",
      subjectName: "", 
      className: "",
      schoolTerm: "",
  
    }
  }

 
  onChangeSubjectCode(e){
    this.setState({ subjectCode: e.target.value})
  }
  onChangeSubjectName(e){
    this.setState({subjectName: e.target.value})
  }
  onChangeClassName(e){
    this.setState({className: e.target.value})
  }
  onChangeSchoolTerm(e){
    this.setState({schoolTerm: e.target.value})
  }
 
  onSubmit(e){
    e.preventDefault()
    const data = {
      subjectCode: this.state.subjectCode,
      subjectName: this.state.subjectName,
      className: this.state.className,
      schoolTerm: this.state.schoolTerm,
      
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
      className: "",
      schoolTerm: "",
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

      {/* creating class */}
      
      <div className='px-5 wrapper mt-4 '>
        <form onSubmit={this.onSubmit} className=' mt-4'>

        <div className='subject'><h2>Create Class and Subject</h2></div>
        
        <div className='form-group'>
        <strong>Select Class below</strong>
        <select className='classes'value={this.state.className}
              onChange={this.onChangeClassName} > 
            <option>Form</option>
            <option>Form 1</option>
            <option>Form 2</option>
            <option>Form 3</option>
            <option>Form 4</option>
        </select>
        </div>

        <div className='form-group'>
        <strong>Select school Term below</strong>
        <select className='terms'value={this.state.schoolTerm}
              onChange={this.onChangeSchoolTerm} > 
            <option>Term</option>
            <option>Term 1</option>
            <option>Term 2</option>
            <option>Term 3</option>
        </select>
        </div>

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
              type="submit"  value="Create Subject" 
              className="btn btn-primary btn-block" />
            </div>
          </form>
      </div>

      <div>

      </div>

      {/* subject List per class */}
      <div><SubjectList/></div>

    </div>
  )}
}

export default AddSubject
 