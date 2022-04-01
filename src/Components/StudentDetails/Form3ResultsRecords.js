
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Form3ResultsRecords = () => {

  const [form3Results, setForm3Results] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/smis/getForm3Results")
      .then(({ data }) => {
        setForm3Results(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  
  return (
    <div>

     

    <div className="">
    <div className="table-responsive">
        <h2>Form Three Examination Results</h2>
      <Table className="table-striped table-hover table-bordered" >
          
        <thead>
          <tr>
          <th>No.</th>
            <th>Firstname</th>
            <th>Surname</th>
            <th>class</th>
            <th>subject</th>
            <th>marks</th>
            <th>mark</th>
            <th>type</th>
           
          </tr>
        </thead>
        <tbody>
        { form3Results.map((res, index )=>{

            return( 
            <tr key={res.studentId}>
                <th scope="row">{index+1}</th>
                <td>{res.firstname}</td>
                <td>{res.surname}</td>
                <td>{res.classId}</td>
                <td>{res.subjectCode}</td>
                <td>{res.marks}</td>
                <td>{res.mark}</td>
                <td>{res.type}</td>
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
  
export default Form3ResultsRecords;