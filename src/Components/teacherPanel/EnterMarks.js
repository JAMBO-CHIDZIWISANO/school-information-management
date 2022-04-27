import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap';
import Select from 'react-select'
import UpdateMarks from '../StudentDetails/updateMarks';
import TeacherSubject from './TeacherSubject';
import { useParams,  } from "react-router-dom";



const EnterMarks = () => {

    const {subjectCode} = useParams();
  
    //this.onChangeType = this.onChangeType.bind(this);
    const [student_score, setStudent_score] = useState("");
    const [total_score, setTotal_score] = useState("");
    const [studentId, setStudentId] = useState("");
    const [subjectCod, setSubjectCod] = useState("");
    const [termId, setTermId] = useState("");

    const [student, setStudent] = useState([])
    const [subject, setSubject] = useState([])
    const [term, setTerm] = useState([])
    


   
  
    useEffect( () => {
      axios.get(`http://localhost:4000/api/smis/subject/${subjectCode}`).then((response) => {
        setSubject(response.data) 
    });
    
      axios.get(`http://localhost:4000/api/smis/student/subject/${subjectCode}`).then((response) => {
        setStudent(response.data) 
    });

      axios.get('http://localhost:4000/api/smis/getAllTerms').then((response) => {
        setTerm(response.data) 
    });

    },

    []);
      
  
  //   this.setState({selectTerm: termsOptions})
  // }

  //retrieve academic year from backend
  // async getYear(){
  //   const res = await axios.get('http://localhost:4000/api/smis/getAllAYears')
  //   const data = res.data

  //   const yearOptions = data.map(item => ({
  //     "value" : item.ayearId,
  //     "label" : item.academicyear

  //   }))
  //   this.setState({selectYear: yearOptions})
  // }

  //mount function that retrieve data from backend 
  // componentDidMount(){
    
  //   this.getSubjects()
  //   this.getTerm()
  //   //this.getYear()
  //   this.getStudentId()
  // }

 
  const onChangeStudent_score = (e) =>{
      const student_score = e.target.value
     setStudent_score(student_score)

     }
  const onChangeTotal_score = (e) =>{
    const total_score = e.target.value
    setTotal_score(total_score)
    }
  const onChangeStudentId = (e) =>{
    const studentId = e.target.value
    setStudentId(studentId)
    }

  const onChangeSubjectCode = (e) =>{
    const subjectCode = e.target.value
    setSubjectCod(subjectCode)
    }

  const onChangeTermId = (e) =>{
    const termId = e.target.value
    setTermId(termId)
    }
            
 
  // onChanngeFullmarks(e){
  //   this.setState({fullmarks: e.target.value})
  // }

  //handle student id input field change
  // onChangeStudentId(e){
  //   this.setState({studentId: e.target.value})
  // }

  //handle exam type input field change
  // onChangeType(e){
  //   this.setState({ type: e.target.value})
  // }

  //handle years input field change
  // onChangeYearId(e){
  //   console.log(e)
  //  this.setState({ayearId:e.value, academicyear:e.label})
  // }
  // onChangeTermId(e){
  //   console.log(e)
  //  this.setState({termId:e.value, termName:e.label})
  // }
  // //handle student id select field change
  // onChangeStudentId(e){
  //   console.log(e)
  //  this.setState({studentId:e.value, studentId:e.label})
  // }
  // onChangeSubjectCode(e){
  //   console.log(e)
  //  this.setState({subjectCode:e.value, subjectCode:e.label})
  // }
  
  //handle submit results form events
  const onSubmit = (e) => {
    e.preventDefault()
    const data = {
       
        student_score ,
        total_score ,
        studentId ,
        subjectCode,
        termId ,
    };

    axios.post("http://localhost:4000/api/smis/addMark", data)
      .then((res)=>{
        console.log(res.data)
      }).catch((error)=>{
        console.log(error)
      });

  } 

 

  return (
    <div>

      <div>
      <Button 
              
              onClick={onSubmit} 
              
              className="btn btn-primary " 
            > Submit</Button>
        <table className='table-bordered table-responsive'>
          <thead>
            <th>
              
              
              <Select 
                type='text'
                placeholder='student'
                options={student.map((item) =>{
                  return(
                    <div>{item.studentId}</div>
                  )
                })} 
                onChange={onChangeStudentId}
              />
              
            </th>
            <th>
            <Select 
                  placeholder="subject"
                  // value={subjectCod}
                  options={subject.map((item) =>{
                    return(
                      <div>{item.subjectCode}</div>
                    )
                  })}                   
                  onChange={onChangeSubjectCode}
            />
            </th>
            
              {term.map((item,key ) =>{
                    return(
                      <th key={key}>
                      <Select 
                  placeholder="term"
                  // value={termId}
                  options={item.termId} 
                  onChange={onChangeTermId}
                      />
                      </th>
                    )
                  })}
            
            
            <th>
            <select
                  // value={this.state.type} 
                  className="form-control"
                  type="text"
                 
                  >
                    <option>Exam Type</option>
                    <option>End-Of-Term</option>
                    <option>Assessment</option>
            </select>
            </th>
            <th>
              <input
                type='text'
                placeholder='obtained Mark'
                value={student_score}
                onChange={onChangeStudent_score}
              />
            </th>
            <th>
              <input
                type='text'
                placeholder='total marks'
                value={total_score}
                onChange={onChangeTotal_score}
              />
            </th>
            
            <th>
              <input 
                placeholder='academic'
                type='text'
              />
            </th>
            
          </thead>
        </table>
      </div>
      <div className='px-5 wrapper mt-4 '>
        {/* <form onSubmit={this.onSubmit} className=' mt-4'>
          
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
        </form> */}
      </div>
      {/* <div>
        <UpdateMarks/>
      </div> */}
    </div>
  )}


export default EnterMarks 
 