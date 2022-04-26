import axios from "axios";
import { Button } from "react-bootstrap";
import Select from 'react-select'

import React, { Component } from 'react';

class GiveTeachersSubjects extends Component {

    //constructor that bind state change
    constructor(props){
        super(props);

        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            
            selectTeacher:[],
            teacherId: "",

            selectSubject: [],
            subjectCode:"",
            subjectName:""
        }
    }

    
    async getTeacherId(){
        const res = await axios.get('http://localhost:4000/api/smis/getAllTeacherId')
        const data = res.data
    
        const teacherOptions = data.map(d => ({
          "value" : d.teacherId,
          "label" : d.teacherId
    
        }))
        this.setState({selectTeacher: teacherOptions})
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

    //mount function that retrieve data from backend 
    componentDidMount(){
        this.getSubjects()
        this.getTeacherId()
    }

    //handle on input change of subject function
    onChangeSubjectCode(e){
        console.log(e)
        this.setState({subjectCode:e.value, subjectName:e.label})
    }

    //handle on input change of student functin
    onChangeTeacherId(e){
        console.log(e)
        this.setState({teacherId:e.value, teacherId:e.label})
    }

    //on form submit post data
    onSubmit(e){
        e.preventDefault()
        const data = {
            teacherId: this.state.teacherId,
            subjectCode: this.state.subjectCode,
        };

        axios.post('http://localhost:4000/api/smis/addTSubject', data)
        .then((res)=>{
            console.log(res.data)
          }).catch((error)=>{
            console.log(error)
          });
        this.setState({
           
            teacherId: this.state.teacherId,
            
            subjectCode: "",
            
        })
       
    }

    

    render() {
        return (
            <div className="container">
                <h5 className="text-center mt-3"> Assign Teachers Subjects</h5>
                <form onSubmit={this.onSubmit} className="form-group mt-3">
                    <div className="">
                        
                        <div className='form-group mt-2 '>
                            <Select 
                            placeholder="Select teacher"
                            isSearchable="true"
                            options={this.state.selectTeacher} 
                            onChange={this.onChangeTeacherId.bind(this)}
                            />
                        </div>

                        <div className='form-group mt-2 '>
                            <Select
                            
                            isSearchable="true"
                            placeholder="Select Subject"
                            options={this.state.selectSubject} 
                            onChange={this.onChangeSubjectCode.bind(this)}
                            />
                        </div>

                       
                            <Button onClick={this.onSubmit}> Submit</Button>
                       

                    </div>
                </form>
            </div>
        );
    }
}

export default GiveTeachersSubjects;