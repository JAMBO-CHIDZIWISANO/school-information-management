import React, { Component } from 'react';
import axios from 'axios';
class AttendanceForm extends Component {

    constructor(props){
        super(props);
        this.onChangeAttendanceId = this.onChangeAttendanceId.bind(this);
        this.onChangeAttendanceDate = this.onChangeAttendanceDate.bind(this);
        this.onChangePresent = this.onChangePresent.bind(this);
        this.onChangeAbsentReason = this.onChangeAbsentReason.bind(this)
        this.onChangeClassId = this.onChangeClassId.bind(this)
        this.onChangeStudentId = this.onChangeStudentId.bind(this)
        this.onChangeTermId = this.onChangeTermId.bind(this)
    
        this.onSubmit = this.onSubmit.bind(this);
    
        this.state = {
          attendenceId:"",
          attendanceDate: "",
          classId: "",
          termId:"",
          studentId: "",
          present:"",
          absentReason: ""
        }
      }
    
      onChangeAttendanceId(e){
        this.setState({attendenceId: e.target.value})
      }
      onChangeAttendanceDate(e){
        this.setState({ attendanceDate: e.target.value})
      }
      onChangeClassId(e){
        this.setState({classId: e.target.value})
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
            attendenceId:this.state.attendenceId,
            attendanceDate: this.state.attendanceDate,
            classId:this.state.classId,
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
            attendenceId:"",
            attendanceDate: "",
            classId: "",
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
                <label htmlFor='attendenceId'>Id</label>
                <input   
                  type="text"
                  name='attendanceId'
                  value={this.state.attendenceId}
                  onChange={this.onChangeAttendanceId}
                  className='form-control form-control-sm mt-2'
                  id='attendanceId'
                  placeholder='attendance Id'/>
              </div>
    
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
                <label htmlFor='classId'>class</label>
                <input
                  name='classId'
                  value={this.state.classId}
                  onChange={this.onChangeClassId}
                  className='form-control form-control-lg'
                  id='classId'
                  placeholder='class'/>
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
                <input 
                  type="submit" 
                  value="create post" 
                  className="btn btn-primary btn-block" />
                </div>
              </form>
          </div>
    
        </div>
    

  )}
}

export default AttendanceForm
