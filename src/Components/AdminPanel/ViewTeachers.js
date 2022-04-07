import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Home.css";

const ViewTeachers = () => {
    const [data, setData] = useState([]);

    // retrieving teacher information from database
    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/api/smis/getAllTeachers");
        setData(response.data);
        
    };
    // refreshing the window
    useEffect(() => {
        loadData();
    }, []);

    // deleting user
    
    const deleteTeacher = (teacherId) => {
        if (window.confirm('Action is irriversible! Do you really want to delete this?')){
            axios.delete(`http://localhost:4000/api/smis/teacher/${teacherId}`);
            toast.success('User Deleted Successfully');
            // reload window after sometime
            setTimeout( () => loadData(), 500);
        }
    };

    

  return (
    <div style={{marginTop: "10px"}}>
        <hr/>
            <Link to={'/admin/addTeacher'}>
                <button className="btn btn-view" >Back</button>
            </Link> 
        <hr/>
        <h1 style={{textAlign: "center"}}>LIST OF TEACHERS</h1>
        <table className="table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>No. </th>
                    <th style={{textAlign: "center"}}>Firstname</th>
                    <th style={{textAlign: "center"}}>Middle Name</th>
                    <th style={{textAlign: "center"}}>Surname</th>
                    <th style={{textAlign: "center"}}>Gender</th>
                    <th style={{textAlign: "center"}}>Phone</th>
                    <th style={{textAlign: "center"}}>Qualification</th>
                    <th style={{textAlign: "center"}}>Join Date</th>
                    <th style={{textAlign: "center"}}>Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => {
                    return (
                    <tr key={item.teacherId} >
                        <th scope="row">{index+1}</th>
                        <td>{item.firstname}</td>
                        <td>{item.middlename}</td>
                        <td>{item.surname}</td>
                        <td>{item.gender}</td>
                        <td>{item.phoneNo}</td>
                        <td>{item.qualification}</td>
                        <td>{item.joinDate}</td>
                        <td>
                            <Link to={`/update/&{item.id}`}>
                                <button className="btn btn-edit" >Edit</button>
                            </Link>
                            <button className="btn btn-delete" onClick={() => deleteTeacher(item.teacherId)}>Delete</button>
                            <Link to={`/view/&{item.id}`}>
                                <button className="btn btn-view" >View</button>
                            </Link>
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default ViewTeachers;