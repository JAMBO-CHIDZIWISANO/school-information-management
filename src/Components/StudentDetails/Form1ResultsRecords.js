
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Form1ResultsRecords = () => {

  const [form1Results, setForm1Results] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/smis/getForm1Results")
      .then(({ data }) => {
        setForm1Results(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  
  return (
    <div>

     

    <div className="">
    <h2 className="text-center">Form one Examination Results</h2>

    <div className="">
      <Table className="table-striped table-hover table-bordered" >
          
        <thead>
          <tr>
            <th>No.</th>
            <th>Firstname</th>
            <th>Surname</th>
            
            <th>Subject</th>
            <th>Score</th>
            <th>Total</th>
            <th>% mark</th>
            <th>Grade</th>
            <th>Type</th>
           
          </tr>
        </thead>
        <tbody>
        { form1Results.map((res, index )=>{

            return( 
            <tr key={res.studentId}>
                <th scope="row">{index+1}</th>
                <td>{res.firstname}</td>
                <td>{res.surname}</td>
                
                <td>{res.subjectName}</td>
                <td>{res.student_score}</td>
                <td>{res.totalScore}</td>
                <td>{res.percent}</td>
                <td>{res.Grade}</td>
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
  
export default Form1ResultsRecords;