
import React, { useState, useEffect } from "react";
import axios from "axios";
import {  Table } from "react-bootstrap";
import StudentsMarksTableRow from "./StudentsTableRowMarks";


const AllStudentsMarks = () => {
  const [studentsMarks, setStudentsMarks] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/smis/getAllStudentsMarks")
      .then(({ data }) => {
        setStudentsMarks(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return studentsMarks.map((res, i) => {
      return <StudentsMarksTableRow obj={res} key={i} />;
    });
  };
  
  return (
    <div>

     

    <div className="row">
    <div className="table-responsive">

      <Table className="table-striped table-hover table-bordered" >
        <thead>
          <tr>
          <th>Firstname</th>
            <th>Surname</th>
            <th>Class</th>
            <th>Subject</th>
            <th>Student Score</th>
            <th>Total Score</th>
            <th>Percentage (%)</th>
            <th>Grade</th>
            <th>Type</th>
           
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>

     

    </div>

    </div>

    </div>
  );
};
  
export default AllStudentsMarks;