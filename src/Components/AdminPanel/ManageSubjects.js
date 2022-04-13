import React from 'react'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";
import { useEffect, useState } from 'react';
import axios from 'axios';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const ManageSubjects = () => {
    const [subject, setSubject] = useState([]);

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
    <div className='teachers'>
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
                            <Link to={`/update/&{item.id}`}>
                                <button className="btn btn-view" ><ModeEditIcon/></button>
                            </Link>
                                <button className="btn btn-delete" onClick={() =>deleteSubject(item.subjectCode)} ><DeleteOutlinedIcon/></button>
                               
                        </td>
                    </tr>
                   )
                })}
                    
            </tbody>
        </table>
    </div>
  )
}

export default ManageSubjects