import axios from 'axios';
import React, { Component } from 'react'
class EnterMarks extends Component {


  constructor(props){
    super(props);
    this.onChangeMarkId = this.onChangeMarkId.bind(this);
    this.onChangeStatus = this.onChangeStatus.bind(this);
    this.onChangeMarks = this.onChangeMarks.bind(this);
    this.onChangeStudentId = this.onChangeStudentId.bind(this)
    this.onChangeSubjectCode = this.onChangeSubjectCode.bind(this)
    this.onChangeClassId = this.onChangeClassId.bind(this)
    this.onChangeTermId = this.onChangeTermId.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      markId:"",
      status: "",
      marks: "",
      studentId:"",
      subjectCode:"",
      termId: "",
      classId:""
    }
  }

  onChangeMarkId(e){
    this.setState({markId: e.target.value})
  }
  onChangeStatus(e){
    this.setState({ status: e.target.value})
  }
  onChangeMarks(e){
    this.setState({marks: e.target.value})
  }
  onChangeStudentId(e){
    this.setState({studentId: e.target.value})
  }
  onChangeSubjectCode(e){
    this.setState({subjectCode: e.target.value})
  }

  onChangeTermId(e){
    this.setState({termId: e.target.value})
  }

  onChangeClassId(e){
    this.setState({classId: e.target.value})
  }


  onSubmit(e){
    e.preventDefault()
    const data = {
        markId: this.state.markId,
        status: this.state.status,
        marks: this.state.marks,
        studentId: this.state.studentId,
        subjectCode: this.state.subjectCode,
        classId: this.state.classId,
        termId: this.state.termId
    };

    axios.post("http://localhost:4000/api/smis/addMark", data)
      .then((res)=>{
        console.log(res.data)
      }).catch((error)=>{
        console.log(error)
      });
    this.setState({
        markId:"",
        status: "",
        marks: "",
        studentId:"",
        subjectCode:"",
        classId:""
    })
  } 

 
  

  render(){

  return (
    <div>
      <div className='px-5 wrapper mt-4 '>
        <form onSubmit={this.onSubmit} className=' mt-4'>

          <div className='form-group'>
            <label htmlFor='markId'>Mark Id</label>
            <input   
              name='markId'
              value={this.state.markId}
              onChange={this.onChangeMarkId}
              className='form-control form-control-sm mt-2'
              id='markId'
              placeholder='markId'/>
          </div>

          <div className='form-group'>
            <label htmlFor='marks'>Mark</label>
            <input   
              name='marks'
              value={this.state.marks}
              onChange={this.onChangeMarks}
              className='form-control form-control-sm'
              id='marks'
              placeholder='marks'/>
          </div>

          <div className='form-group'>
            <label htmlFor='status'>status</label>
            <input
              name='status'
              value={this.state.status}
              onChange={this.onChangeStatus}
              className='form-control form-control-lg'
              id='status'
              placeholder='status'/>
          </div>

          <div className='form-group'>
            <label htmlFor='studentId'>student: </label>
            <input
              name='studentId'
              value={this.state.studentId}
              onChange={this.onChangeStudentId}
              className='form-control form-control-sm'
              id='studentId'
              placeholder="student "/>
          </div>

          <div className='form-group'>
            <label htmlFor='classId'>class: </label>
            <input
              name='classId'
              value={this.state.classId}
              onChange={this.onChangeClassId}
              className='form-control form-control-sm'
              id='classId'
              placeholder="class "/>
          </div>

          <div className='form-group'>
            <label htmlFor='subjectCode'>subject: </label>
            <input
              name='subjectCode'
              type="text"
              value={this.state.subjectCode}
              onChange={this.onChangeSubjectCode}
              className='form-control form-control-sm'
              id='subjectCode'
              placeholder="subject "/>
          </div>

          <div className='form-group'>
            <label htmlFor='subjectCode'>term: </label>
            <input
              name='termId'
              type="text"
              value={this.state.termId}
              onChange={this.onChangeTermId}
              className='form-control form-control-sm'
              id='termId'
              placeholder="termId "/>
          </div>

          <div>
            <input 
              type="submit" 
              value="submit" 
              className="btn btn-primary btn-block" />
            </div>
          </form>
      </div>

      <div>

      </div>

      <div>

      </div>

    </div>
  )}
}

export default EnterMarks
 