import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Home.css";

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
    const deleteUser = (teacherId) => {
        if (window.confirm("Are you sure you want to delete this User ?")
        ) {
          axios.delete(`http://localhost:4000/api/smis/teacher/'%${teacherId}'`);
          toast.success("User Deleted Successfully");
          // refreshing the window
          setTimeout(() => loadData(), 500);
        }
    };

  return (
    <div style={{marginTop: "40px"}}>
      
        <h1>LIST OF TEACHERS</h1>
        <table className="table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>No. </th>
                    <th style={{textAlign: "center"}}>Firstname</th>
                    <th style={{textAlign: "center"}}>Surname</th>
                    <th style={{textAlign: "center"}}>Gender</th>
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
                                <td>{item.qualification}</td>
                                <td>{item.joinDate}</td>
                                <td>
                                    <Link to={`/update/&{item.id}`}>
                                       <button className="btn btn-edit" >Edit</button>
                                    </Link>

                                    <button className="btn btn-delete" onClick={() => deleteUser(item.id)}>Delete</button>

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

export default Display;