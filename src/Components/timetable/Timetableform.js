
import axios from 'axios';
import React, { Component } from 'react';
import Select from 'react-select'

class Timetableform extends Component {

    constructor(props) {
        super(props);
        this.onChangeDay = this.onChangeDay.bind(this);
        this.onChangeStartTime = this.onChangeStartTime.bind(this);
        this.onChangeEndTime = this.onChangeEndTime.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            
            day: "",
            lesson_startTime: "",
            lesson_endTime: "",

            selectSubject:[],
            subjectName: "",
            subjectCode: "",

            selectRoom: [],
            roomName: "",
            roomId: "",

            selectTeachers: [],
            surname: "",
            teacherId: "",

            selectClass: [],
            classId:"",
            className:""

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

    async getRooms(){
        const res = await axios.get('http://localhost:4000/api/smis/getAllRooms')
        const data = res.data
    
        const roomOptions = data.map(d => ({
          "value" : d.roomId,
          "label" : d.roomName
    
        }))
        this.setState({selectRoom: roomOptions})
    }

    async getTeachers(){
        const res = await axios.get('http://localhost:4000/api/smis/getAllLessonTeacher')
        const data = res.data
    
        const teacherOptions = data.map(d => ({
          "value" : d.teacherId,
          "label" : d.surname 
          
          
    
        }));
        this.setState({selectTeachers: teacherOptions})
    }

    async getClass(){
        const res = await axios.get('http://localhost:4000/api/smis/getAllclasses')
        const data = res.data
    
        const classOptions = data.map(d => ({
          "value" : d.classId,
          "label" : d.className 
          
          
    
        }));
        this.setState({selectClass: classOptions})
    }

    componentDidMount(){
    
        
        this.getSubjects()
        this.getRooms()
        this.getTeachers()
        this.getClass()
      }

    onChangeDay(e){
        this.setState({day: e.target.value})
    }
    onChangeStartTime(e){
        this.setState({lesson_startTime: e.target.value})
    }
    onChangeEndTime(e){
        this.setState({lesson_endTime: e.target.value})
    }
   
    onChangeSubjectCode(e){
        console.log(e)
        this.setState({subjectCode:e.value, subjectName:e.label})
    }
    onChangeRoomId(e){
        console.log(e)
        this.setState({roomId:e.value, roomName:e.label})
    }
    
    onChangeTeacherId(e){
        console.log(e)
        this.setState({teacherId:e.value, surname:e.label })
    }
    onChangeClassId(e){
        console.log(e)
        this.setState({classId:e.value, className:e.label })
    }
    onSubmit(e){
            e.preventDefault()
        const data = {
            day: this.state.day,
            lesson_startTime: this.state.lesson_startTime,
            lesson_endTime: this.state.lesson_endTime,
            subjectCode: this.state.subjectCode,
            teacherId: this.state.teacherId,
            roomId: this.state.roomId,
            classId: this.state.classId,

        };

        axios.post("http://localhost:4000/api/smis/addLesson", data)
            .then((res)=>{
                console.log(res.data)
            }).catch((error)=>{
                console.log(error)
            });
        this.setState({

            day: "",
            lesson_startTime: "",
            lesson_endTime: "",
            subjectCode: "",
            roomId: "",
            teacherId: "",
            classId:""

        });
    }

    render() {

        return(
            <div className='container'>

                <form onSubmit={this.onSubmit} className='col-md-6 '>
                    
                    <div className='row'>
                        <div className='col-12 col-md-12 col-lg-12 '>
                            <div className='form-group'>
                            <label htmlFor='day'>Day</label>
                            <select
                                name='day'
                                type='text'
                                placeholder='day'
                                value={this.state.day}
                                onChange={this.onChangeDay}
                                id="day"
                                className='form-control'
                            >
                                <option>Tap to choose</option>
                                <option>Monday</option>
                                <option>Tuesday</option>
                                <option>Wednesday</option>
                                <option>Thursday</option>
                                <option>Friday</option>
                            </select>
                            </div>
                        </div>
                        
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6 '>
                            <div className='form-group'>
                            <label htmlFor='lesson_startTime'>start</label>
                            <input
                                name='lesson_startTime'
                                type='time'
                                placeholder='start'
                                value={this.state.lesson_startTime}
                                onChange={this.onChangeStartTime}
                                id="lesson_startTime"
                                className='form-control'
                            />

                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6 '>
                            <div className='form-group'>
                            <label htmlFor='lesson_endTime'>end</label>
                            <input
                                name='lesson_endTime'
                                type='time'
                                placeholder='end'
                                value={this.state.lesson_endTime}
                                onChange={this.onChangeEndTime}
                                id="lesson_endTime"
                                className='form-control'
                            />

                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6 ' >
                            <div className='form-group mt-3'>
                                <Select 
                                placeholder="Select Subject"
                                options={this.state.selectSubject} 
                                onChange={this.onChangeSubjectCode.bind(this)}
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6 ' >
                            <div className='form-group mt-3'>
                            <Select

                                placeholder='select teacher'
                                options={this.state.selectTeachers}
                                onChange={this.onChangeTeacherId.bind(this)}
                            />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-6 col-lg-6 ' >
                            <div className='form-group mt-3'>
                            <Select 
                            placeholder="Select class"
                            options={this.state.selectClass} 
                            onChange={this.onChangeClassId.bind(this)}
                            />
                            </div>
                        </div>
                        <div className='col-12 col-md-6 col-lg-6 ' >
                            <div className='form-group mt-3'>
                            <Select 
                            placeholder="Select classroom "
                            options={this.state.selectRoom} 
                            onChange={this.onChangeRoomId.bind(this)}
                            />
                            </div>
                    
                        </div>
                    </div>
                        

                  
                    
                    
                    
                    
                    
                    

                    <button className="btn btn-primary btn-block" >submit</button>
                </form>

            </div>
        )
    }

}

export default Timetableform;