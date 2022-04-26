import axios from 'axios';
import React, { Component } from 'react'
import Select from 'react-select'
import UpdateMarks from '../StudentDetails/updateMarks';
class EnterMarks extends Component {

  constructor(props){

    super(props);

    this.onChangeType = this.onChangeType.bind(this);
    this.onChangeStudentScore = this.onChangeStudentScore.bind(this);
    this.onChangeTotalScore = this.onChangeTotalScore.bind(this);
    this.onChangeStudentId = this.onChangeStudentId.bind(this)
    this.onChanngeFullmarks = this.onChanngeFullmarks.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      type: "",
      student_score: "",
      total_score:"",
      studentId:"",
      fullmarks: "",
    
      selectSubject : [],
      subjectName: "",
      subjectCode:"",

      selectTerm:[],
      termId: "",
      termName:"",

      selectYear:[],
      ayearId:"",
      academicyear:"",
     
      
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

  
  async getTerm(){
    const res = await axios.get('http://localhost:4000/api/smis/getAllTerms')
    const data = res.data

    const termsOptions = data.map(item => ({
      "value" : item.termId,
      "label" : item.termName

    }))
    this.setState({selectTerm: termsOptions})
  }

  //retrieve academic year from backend
  async getYear(){
    const res = await axios.get('http://localhost:4000/api/smis/getAllAYears')
    const data = res.data

    const yearOptions = data.map(item => ({
      "value" : item.ayearId,
      "label" : item.academicyear

    }))
    this.setState({selectYear: yearOptions})
  }

  //mount function that retrieve data from backend 
  componentDidMount(){
    
    this.getSubjects()
    this.getTerm()
    this.getYear()
  }

 
  onChangeStudentScore(e){
    this.setState({student_score: e.target.value})
  }
  onChangeTotalScore(e){
    this.setState({total_score: e.target.value})
  }

  onChanngeFullmarks(e){
    this.setState({fullmarks: e.target.value})
  }

  //handle student id input field change
  onChangeStudentId(e){
    this.setState({studentId: e.target.value})
  }

  //handle exam type input field change
  onChangeType(e){
    this.setState({ type: e.target.value})
  }

  //handle years input field change
  onChangeYearId(e){
    console.log(e)
   this.setState({ayearId:e.value, academicyear:e.label})
  }
  onChangeTermId(e){
    console.log(e)
   this.setState({termId:e.value, termName:e.label})
  }
  onChangeSubjectCode(e){
    console.log(e)
   this.setState({subjectCode:e.value, subjectName:e.label})
  }
  
  //handle submit results form events
  onSubmit(e){
    e.preventDefault()
    const data = {
       
        student_score: this.state.student_score,
        total_score: this.state.total_score,
        studentId: this.state.studentId,
        type: this.state.type,
        subjectCode: this.state.subjectCode,
        ayearId: this.state.ayearId,
        termId: this.state.termId,
        fullmarks: this.state.fullmarks,
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
        ayearId:this.state.ayearId,
        fullmarks: this.state.fullmarks,
    })
  } 

  render(){

  return (
    <div>
      <div className='px-5 wrapper mt-4 '>

        <form onSubmit={this.onSubmit} className=' mt-4'>
          
          <div className='row'>

              <div className='col-12 col-md-4 col-lg-3'>
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
              </div>
              <div className='col-12 col-md-4 col-lg-3'>
                <div className='form-group'>
                  <label htmlFor='student_score'>student score</label>
                  <input   
                    name='student_score'
                    type="number"
                    value={this.state.student_score}
                    onChange={this.onChangeStudentScore}
                    className='form-control form-control-sm'
                    id='student_score'
                    placeholder='student score'/>
                </div>
              </div>
              <div className='col-12 col-md-5 col-lg-3'>
                <div className='form-group'>
                    <label htmlFor='student_score'>total score</label>
                    <input   
                      name='total_score'
                      type="number"
                      value={this.state.total_score}
                      onChange={this.onChangeTotalScore}
                      className='form-control form-control-sm'
                      id='total_score'
                      placeholder='total score'/>
                </div>
              </div>

              <div className='col-12 col-md-4 col-lg-3'>
              
              </div>

          </div>

          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className="form-group mt-2 ">
                
                <select
                  value={this.state.type} 
                  className="form-control"
                  type="text"
                  onChange={this.onChangeType}
                  required>
                    <option>Exam Type</option>
                    <option>End-Of-Term</option>
                    <option>Assessment</option>
                </select>
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='form-group mt-2 '>
                <Select 
                  placeholder="Select Subject"
                  options={this.state.selectSubject} 
                  onChange={this.onChangeSubjectCode.bind(this)}
                />
              </div>
            </div>
            
          </div>
         
          <div className='row'>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='form-group mt-2'>
                <Select 
                  placeholder="Select Term"
                  options={this.state.selectTerm}
                  
                  onChange={this.onChangeTermId.bind(this)}
                />
              </div>
            </div>
            <div className='col-12 col-md-6 col-lg-6'>
              <div className='form-group mt-2 '>
                <Select 
                  placeholder="Select Year"
                  options={this.state.selectYear}
                  
                  onChange={this.onChangeYearId.bind(this)}
                />
              </div>
            </div>
          </div>

          <div className='form-group mt-3'>
            <button 
              type="submit" 
              value="submit" 
              className="btn btn-primary btn-block" 
            > submit</button>
          </div>
        </form>
      </div>
      <div>
        <UpdateMarks/>
      </div>
    </div>
  )}
}

export default EnterMarks
 