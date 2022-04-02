
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Form1Students = () => {

  const [form1Students, setForm1Students] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/smis/getForm1Students")
      .then(({ data }) => {
        setForm1Students(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  
  return (
    <div>

     

    <div className="">
    <div className="">
        <h2 className="text-center">Form 1 Students</h2>
      <Table className="table-striped table-hover table-bordered" >
          
        <thead>
          <tr>
          <th>No.</th>
            <th>username</th>
            <th>firstname</th>
            <th>surname</th>
            <th>email</th>
            
           
          </tr>
        </thead>
        <tbody>
        { form1Students.map((res, index )=>{

            return( 
            <tr key={res.studentId}>
                <th scope="row">{index+1}</th>
                <td>{res.username}</td>
                <td>{res.firstname}</td>
                <td>{res.surname}</td>
                <td>{res.email}</td>
                
            </tr>)
        })
        }        

        </tbody>
      </Table>

     

    </div>

    </div>

    </div>
  );
};
  
export default Form1Students;