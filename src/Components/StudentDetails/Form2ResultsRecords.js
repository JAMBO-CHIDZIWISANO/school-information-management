
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Table } from "react-bootstrap";

const Form2ResultsRecords = () => {

  const [form2Results, setForm2Results] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/smis/getForm2Results")
      .then(({ data }) => {
        setForm2Results(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  

  
  return (
    <div>

     

    <div className="">
    <div className="">
        <h2 className="text-center">Form Two Examination Results</h2>
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
        { form2Results.map((res, index )=>{

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
  
export default Form2ResultsRecords;