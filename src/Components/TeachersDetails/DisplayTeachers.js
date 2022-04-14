import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
//import "./Home.css";
import { Button, Table } from "react-bootstrap";
import {  PersonAddAlt1Sharp } from "@mui/icons-material";

const Display = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/api/smis//getAllTeachers");
        setData(response.data);
        
    };
    // refreshing the window
    useEffect(() => {
        loadData();
    }, []);

    // deleting user
    const deleteTeacher = (teacherId) => {
        if (window.confirm("Are you sure you want to delete this User ?")
        ) {
          axios.delete(`http://localhost:4000/api/smis/teacher/${teacherId}`);
          toast.success("User Deleted Successfully");
          // refreshing the window
          setTimeout(() => loadData(), 500);
        }
    };

  return (
    <div style={{marginTop: "40px"}} className="container">

        <div>
        <hr />
      <div style={{textAlign: "right"}}>

      <Link to={"/admin/teacher-record"}> 
        <Button  variant="primary">
          back
        </Button>
      </Link>

        
    
        <Link to={"/admin/add-sdteacher"}> 
            <Button variant="primary">
                <PersonAddAlt1Sharp/>
            </Button>
        </Link>
      </div>
      <hr/>
        </div>


      
        <h1 className="text-center ">LIST OF TEACHERS</h1>

        <Table className="table-hover table-bordered table-striped">
            <thead>
                <tr>
                    <th>No. </th>
                    <th>Firstname</th>
                    <th>Surname</th>
                    <th>Gender</th>
                    <th>Qualification</th>
                    <th>Join Date</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={item.teacherId} >
                                <th scope="row">{index+1}</th>
                                <td>{item.firstname}</td>
                                <td>{item.surname}</td>
                                <td>{item.gender}</td>
                                <td>{item.qualification}</td>
                                <td>{item.join_date}</td>
                                <td>

                                
                                    <Link to={`/update/&{item.id}`}>
                                       <button className="btn btn-edit" >Edit</button>
                                    </Link>

                                    <button className="btn btn-delete" onClick={() => deleteTeacher(item.teacherId)}>Delete</button>

                                   

                                </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        
    </div>
  )
}

export default Display;