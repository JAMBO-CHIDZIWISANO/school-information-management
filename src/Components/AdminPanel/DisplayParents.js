import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Home.css";

const DisplayParents = () => {
    const [data, setData] = useState([]);

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/api/smis//getAllParents");
        setData(response.data);
        
    };
    // refreshing the window
    useEffect(() => {
        loadData();
    }, []);

    // deleting user
    const deleteUser = (parentId) => {
        if (window.confirm("Are you sure you want to delete this User ?")
        ) {     
          axios.delete(`http://localhost:4000/api/smis/parent/${parentId}`);

          toast.success("User Deleted Successfully");
          // refreshing the window
          setTimeout(() => loadData(), 500);
        }
    };

  return (
    <div style={{marginTop: "40px"}}>
      
        <h1>LIST OF Parents</h1>
        <table className="table">
            <thead>
                <tr>
                    <th>No. </th>
                    <th>Firstname</th>
                    <th>Surname</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => {
                    return (
                        <tr key={item.parentId}>
                                <th scope="row">{index+1}</th>
                                <td>{item.firstname}</td>
                                <td>{item.surname}</td>
                                <td>{item.gender}</td>
                                <td>{item.phoneNo}</td>
                                <td>{item.address}</td>
                                <td>
                                    <Link to={`/update/&{item.id}`}>
                                       <button className="btn btn-edit" >Edit</button>
                                    </Link>
                                    <button className="btn btn-delete" onClick={() => deleteUser(item.parentId)}>Delete</button>
                                </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
        
    </div>
  )
}

export default DisplayParents;