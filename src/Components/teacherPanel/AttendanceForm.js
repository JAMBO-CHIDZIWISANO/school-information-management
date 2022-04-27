import React, { Component } from 'react';
import axios from 'axios';
import AttendanceList from './AttendanceList';
class AttendanceForm extends Component {

    constructor(props){
        super(props);
        this.onChangeAttendanceDate = this.onChangeAttendanceDate.bind(this);
        this.onChangePresent = this.onChangePresent.bind(this);
        this.onChangeAbsentReason = this.onChangeAbsentReason.bind(this)
        this.onChangeStudentId = this.onChangeStudentId.bind(this)
        this.onChangeTermId = this.onChangeTermId.bind(this)
    
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          attendanceDate: "",
          termId:"",
          studentId: "",
          present:"",
          absentReason: ""
        }
      }
    
     
      onChangeAttendanceDate(e){
        this.setState({ attendanceDate: e.target.value})
      }
     
      onChangeTermId(e){
        this.setState({termId: e.target.value})
      }
      onChangeStudentId(e){
        this.setState({studentId: e.target.value})
      }
      onChangePresent(e){
        this.setState({present: e.target.value})
      }
      onChangeAbsentReason(e){
        this.setState({absentReason: e.target.value})
      }
    
      onSubmit(e){
        e.preventDefault()
        const data = {
            attendanceDate: this.state.attendanceDate,
           // classId:this.state.classId,
            termId:this.state.termId,
            studentId: this.state.studentId,
            present:this.state.present,
            absentReason:this.state.absentReason
          
        };
    
        axios.post("http://localhost:4000/api/smis/addAttendance", data)
          .then((res)=>{
            console.log(res.data)
          }).catch((error)=>{
            console.log(error)
          });
        this.setState({
            attendanceDate: "",
            termId:"",
            studentId: "",
            present:"",
            absentReason: ""
        })
      } 
    
      
     
    
  render(){
    
    
  return ( 
      
    
     
        <div>
          <div className='px-5 wrapper mt-4 '>
            <form onSubmit={this.onSubmit} className=' mt-4'>
    
              
    
              <div className='form-group'>
                <label htmlFor='attendanceDate'>attendance Date</label>
                <input   
                  type="date"
                  name='attendanceDate'
                  value={this.state.attendanceDate}
                  onChange={this.onChangeAttendanceDate}
                  className='form-control form-control-sm'
                  id='attendanceDate'
                  placeholder='attendanceDate'/>
              </div>
    
              <div className='form-group'>
                <label htmlFor='termId'>term </label>
                <input
                  name='termId'
                  value={this.state.termId}
                  onChange={this.onChangeTermId}
                  className='form-control form-control-sm'
                  id='termId'
                  placeholder="term"/>
              </div>
    
              <div className='form-group'>
                <label htmlFor='studentId'>student </label>
                <input
                  name='studentId'
                  value={this.state.studentId}
                  onChange={this.onChangeStudentId}
                  className='form-control form-control-sm'
                  id='studentId'
                  placeholder="class"/>
              </div>
    
              <div className='form-group'>
                <label htmlFor='present'>present</label>
                <input
                  name='present'
                  placeholder='present'
                  value={this.state.present}
                  onChange={this.onChangePresent}
                  className='form-control form-control-sm'
                  id='present'
                  />
              </div>
    
              <div className='form-group'>
                <label htmlFor='absentReason'>absent Reason</label>
                <input
                  name='absentReason'
                  value={this.state.absentReason}
                  onChange={this.onChangeAbsentReason}
                  className='form-control form-control-sm'
                  id='absentReason'
                  placeholder="absentReason"/>
              </div>

              
    
              <div>
                <button className="btn btn-primary btn-block">submit</button>
               </div>
              </form>
          </div>
          <div className='mt-5'>
            {/* <AttendanceList/> */}
          </div>
        </div>
    

  )}
}

export default AttendanceForm
