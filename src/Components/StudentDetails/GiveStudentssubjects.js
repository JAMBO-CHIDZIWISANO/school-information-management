import axios from "axios";
import { Button } from "react-bootstrap";
import Select from 'react-select'

import React, { Component } from 'react';

class GiveStudentSubjects extends Component {

    //constructor that bind state change
    constructor(props){
        super(props);

        this.onSubmit=this.onSubmit.bind(this);

        this.state = {
            
            selectStudent:[],
            studentId: "",

            selectSubject: [],
            subjectCode:"",
            subjectName:""
        }
    }

    
    async getStudentId(){
        const res = await axios.get('http://localhost:4000/api/smis/getStudentsId')
        const data = res.data
    
        const studentOptions = data.map(d => ({
          "value" : d.studentId,
          "label" : d.studentId
    
        }))
        this.setState({selectStudent: studentOptions})
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
        this.getStudentId()
    }

    //handle on input change of subject function
    onChangeSubjectCode(e){
        console.log(e)
        this.setState({subjectCode:e.value, subjectName:e.label})
    }

    //handle on input change of student functin
    onChangeStudentId(e){
        console.log(e)
        this.setState({studentId:e.value, studentId:e.label})
    }

    //on form submit post data
    onSubmit(e){
        e.preventDefault()
        const data = {
            studentId: this.state.studentId,
            subjectCode: this.state.subjectCode,
        };

        axios.post('http://localhost:4000/api/smis/addSSubject', data)
        .then((res)=>{
            console.log(res.data)
          }).catch((error)=>{
            console.log(error)
          });
        this.setState({
           
            studentId: this.state.studentId,
            
            subjectCode: "",
            
        })
       
    }

    

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} className=" container">
                <h5 className="text-center mt-3"> Assign Students Subjects</h5>
                    
                        
                        <div className='form-group mt-3 '>
                            <Select 
                            placeholder="Select student"
                            isSearchable="true"
                            options={this.state.selectStudent} 
                            onChange={this.onChangeStudentId.bind(this)}
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
                       

                  
                </form>
            </div>
        );
    }
}

export default GiveStudentSubjects;