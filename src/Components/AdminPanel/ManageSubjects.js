import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

import { Button, Modal } from "react-bootstrap";


const ManageSubjects = () => {
    const [subject, setSubject] = useState([]);

    //for edit modal
    const [RowData,setRowData] = useState([])
    const [EditShow, setEditShow] = useState(false)
    const handEditShow = () => {setEditShow(true)}
    const handleViewClose = () => {setEditShow(false)}
   
    //define local state that store form data
    const [subjectCode, setSubjectCode] = useState("") 
    const [subjectName, setSubjectName] = useState("")

    const handleEdit =()=>{
        const url = `http://localhost:4000/api/smis/subject/${subjectCode}`
        const Credentials = {subjectName, subjectCode}
        axios.put(url, Credentials)
        .then(response=>{
            setRowData( response.data);
            window.location.reload()
         
        })
            
    }
  

    // display subjects in the table for easy management
    const loadSubject = async () => {
        const response = await axios.get(`http://localhost:4000/api/smis/getAllSubjects`)
        setSubject(response.data);
    };
    // reload window
    useEffect( () => {
        loadSubject();
       
    }, []);
    // deleting subject
    const deleteSubject = (subjectCode) => {
        if (window.confirm('Action is irriversible! Do you really want to delete this?')){
            axios.delete(`http://localhost:4000/api/smis/subject/${subjectCode}`);
            toast.success('User Deleted Successfully');
            // reload window after sometime
            setTimeout( () => loadSubject(), 500);
        }
    };

  return (
    <div className='container'>
        <br/><h2 className='manage-subjects' style={{textAlign: "center"}}> Manage Subjects</h2>
        <hr/>
            <Link to={'/admin/addSubject'}>
                <button className="btn btn-view" >Back</button>
            </Link> 
        <hr/>
        <table className="table">
            <thead>
                <tr>
                    <th>No. </th>
                    <th>Subject Code</th>
                    <th>Subject name</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {subject.map( (item, index) =>{
                   return(
                    <tr key={item.subjectCode}>
                        <th scope='row'>{index+1}</th>
                        <td>{item.subjectCode}</td>
                        <td>{item.subjectName}</td>
                    
                        <td>
                            
                                <Button className="btn btn-edit"  onClick={()=>{handEditShow(setRowData(item),setSubjectCode(item._subjectCode))}}><ModeEditIcon/></Button>
                           
                                <button className="btn btn-delete" onClick={() =>deleteSubject(item.subjectCode)} ><DeleteOutlinedIcon/></button>
                               
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
                            <label htmlFor='subjectCode'>Subject Code</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setSubjectCode(e.target.value)}
                                defaultValue={RowData.subjectCode}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='subjectName'>Subject Name</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setSubjectName(e.target.value)}
                                defaultValue={RowData.subjectName}
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

export default ManageSubjects