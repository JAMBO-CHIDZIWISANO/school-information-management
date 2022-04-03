import axios from 'axios';
import React, { Component } from 'react'
import Select from 'react-select'

class EnterMarks extends Component {

  constructor(props){

    super(props);

    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeStudentScore = this.onChangeStudentScore.bind(this);
    this.onChangeTotalScore = this.onChangeTotalScore.bind(this);
    this.onChangeStudentId = this.onChangeStudentId.bind(this)
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: "",
      student_score: "",
      total_score:"",
      studentId:"",
      
      selectClass: [],
      classId:"",
      className:"",

      selectSubject : [],
      subjectName: "",
      subjectCode:"",

      selectTerm:[],
      termId: "",
      termName:""
     
      
    }
  }

  async getSubjects(){
    const res = await axios.get('http://localhost:4000/api/smis/getAllSubjects')
    const data = res.data

    const subjectOptions = data.map(d => ({
      "value" : d.subjectCode,
      "label" : d.subjectName

    }))
    this.setState({selectSubject: subjectOptions})
  }

  async getClasses(){
    const res = await axios.get('http://localhost:4000/api/smis/getAllClasses')
    const data = res.data

    const classesOptions = data.map(item => ({
      "value" : item.classId,
      "label" : item.className

    }))
    this.setState({selectClass: classesOptions})
  }

  async getTerm(){
    const res = await axios.get('http://localhost:4000/api/smis/getAllTerms')
    const data = res.data

    const termsOptions = data.map(item => ({
      "value" : item.termId,
      "label" : item.termName

    }))
    this.setState({selectTerm: termsOptions})
  }

  componentDidMount(){
    this.getClasses()
    this.getSubjects()
    this.getTerm()
  }

 
  onChangeStudentScore(e){
    this.setState({student_score: e.target.value})
  }
  onChangeTotalScore(e){
    this.setState({total_score: e.target.value})
  }
  onChangeStudentId(e){
    this.setState({studentId: e.target.value})
  }
  onChangeType(e){
    this.setState({ type: e.target.value})
  }
  onChangeClassId(e){
    console.log(e)
   this.setState({classId:e.value, className:e.label})
  }
  onChangeTermId(e){
    console.log(e)
   this.setState({termId:e.value, termName:e.label})
  }
  onChangeSubjectCode(e){
    console.log(e)
   this.setState({subjectCode:e.value, subjectName:e.label})
  }
  
  onSubmit(e){
    e.preventDefault()
    const data = {
       
        student_score: this.state.student_score,
        total_score: this.state.total_score,
        studentId: this.state.studentId,
        type: this.state.type,
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
       
        student_score: "",
        total_score:"",
        studentId:"",
        type: this.state.type,
        subjectCode:this.state.subjectCode,
        termId:this.state.termId,
        classId: this.state.classId
    })
  } 

  render(){

  return (
    <div>
      <div className='px-5 wrapper mt-4 '>
        <form onSubmit={this.onSubmit} className=' mt-4'>

          <div className='form-group'>
            <label htmlFor='student_score'>student score</label>
            <input   
              name='student_score'
              value={this.state.student_score}
              onChange={this.onChangeStudentScore}
              className='form-control form-control-sm'
              id='student_score'
              placeholder='student score'/>
          </div>

          <div className='form-group'>
            <label htmlFor='student_score'>total score</label>
            <input   
              name='total_score'
              value={this.state.total_score}
              onChange={this.onChangeTotalScore}
              className='form-control form-control-sm'
              id='total_score'
              placeholder='total score'/>
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

          <div className="form-group mt-3">
            <label htmlFor="type">Type</label>
            <select
              value={this.state.type} 
              onChange={this.onChangeType}
              required>
                <option></option>
                <option>End-Of-Term</option>
                <option>Assessment</option>
            </select>
          </div>

          <div className='form-group mt-3'>
            <Select 
              placeholder="Select Class"
              options={this.state.selectClass} 
              onChange={this.onChangeClassId.bind(this)}
            />
          </div>

          <div className='form-group mt-3'>
            <Select 
              placeholder="Select Subject"
              options={this.state.selectSubject} 
              onChange={this.onChangeSubjectCode.bind(this)}
            />
          </div>

          <div className='form-group mt-3'>
            <Select 
              placeholder="Select Term"
              options={this.state.selectTerm}
               
              onChange={this.onChangeTermId.bind(this)}
            />
          </div>

          <div className='form-group mt-3'>
            <input 
              type="submit" 
              value="submit" 
              className="btn btn-primary btn-block" 
            />
          </div>
        </form>
      </div>
    </div>
  )}
}

export default EnterMarks
 