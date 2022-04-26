import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { Button, Modal } from "react-bootstrap";


const UpdateMarks = () => {
    const [marks, setMarks] = useState([]);

    //for edit modal
    const [RowData,setRowData] = useState([])
    const [EditShow, setEditShow] = useState(false)
    const handEditShow = () => {setEditShow(true)}
    const handleViewClose = () => {setEditShow(false)}
   
    //define local state that store form data
    const [markId, setMarkId] = useState("") 
    const [student_score, setStudentScore] = useState("")
    const [total_score, setTotalScore] = useState("")
    const [type, setType] = useState("")
    const [termId, setTermId] = useState("")
    const [subjectCode, setSubjectCode] = useState("")

    const handleEdit =()=>{
        const url = `http://localhost:4000/api/smis/mark/${markId}`
        const Credentials = {markId, student_score, total_score, type,subjectCode}
        axios.put(url, Credentials)
        .then(response=>{
            setRowData( response.data);
            window.location.reload()
         
        })
            
    }
  

    // display subjects in the table for easy management
    const loadSubject = async () => {
        const response = await axios.get(`http://localhost:4000/api/smis/getAllMarks`)
        setMarks(response.data);
    };
    // reload window
    useEffect( () => {
        loadSubject();
       
    }, []);
    // deleting subject
    const deleteSubject = (markId) => {
        if (window.confirm('Action is irriversible! Do you really want to delete this?')){
            axios.delete(`http://localhost:4000/api/smis/mark/${markId}`);
            toast.success('User Deleted Successfully');
            // reload window after sometime
            setTimeout( () => loadSubject(), 500);
        }
    };

  return (
    <div className='container'>
       
        <table className="table">
            <thead>
                <tr>
                    <th>No. </th>
                    <th>student Id</th>
                    <th>subject Code</th>
                    <th>student_score</th>
                    <th>total_score</th>
                    <th>type</th>
                    
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {marks.map( (item, index) =>{
                   return(
                    <tr key={item.markId}>
                        <th >{item.markId}</th>
                        <td>{item.studentId}</td>
                        <td>{item.subjectCode}</td>
                        <td>{item.student_score}</td>
                        <td>{item.total_score}</td>
                        <td>{item.type}</td>
                    
                        <td>
                            
                                <Button className="btn btn-edit"  onClick={()=>{handEditShow(setRowData(item),setSubjectCode(item._subjectCode))}}><ModeEditIcon/></Button>
                           
                                <button className="btn btn-delete" onClick={() =>deleteSubject(item.markId)} ><DeleteOutlinedIcon/></button>
                               
                        </td>
                    </tr>
                   )
                })}
                    
            </tbody>
        </table>

        <div className='modal-box-view'>
                <Modal
                    show={EditShow}
                    onHide={handleViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Edit Subject</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-group mt-3'>
                            <label htmlFor='markId'>Mark Id</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setMarkId(e.target.value)}
                                defaultValue={RowData.markId}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='student_score'>student score</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setStudentScore(e.target.value)}
                                defaultValue={RowData.student_score}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='total_score'>total student</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setTotalScore(e.target.value)}
                                defaultValue={RowData.total_score}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='subjectCode'>subjectCode</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setSubjectCode(e.target.value)}
                                defaultValue={RowData.subjectCode}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='type'>Type</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setType(e.target.value)}
                                defaultValue={RowData.type}
                            />
                        </div>
                       
                        
                        <Button onClick={handleEdit} type="submit" variant="secondary" className='btn btn-success mt-4'>Update</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary'  onClick={handleViewClose}>Close</Button>
                    </Modal.Footer> 
                </Modal>
        </div>

       
    </div>
  )
}

export default UpdateMarks