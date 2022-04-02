
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table } from "react-bootstrap";
import StudentTableRow from "../AdminPanel/StudentTableRow";

import Form1Students from "./Form1Students"
import Form2Students from "./Form2Students"
import Form3Students from "./Form3Students"
import Form4Students from "./Form4Students"
// import EditStudent from "./EditStudent"
// import AddStudent from "./AddStudent";

const StudentList = () => {
  const [students, setStudents] = useState([]);
  
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/smis/getAllStudents")
      .then(({ data }) => {
        setStudents(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  
  const DataTable = () => {
    return students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  };
  
  return (
 

    <div className="row">
      <h2 className="text-center">Table for All Students</h2>
    <div className="">


      <Table className="table-striped table-hover table-bordered" >
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>DoB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>{DataTable()}</tbody>
      </Table>

     

    </div>

    <div>
      <Form1Students/>
    </div>

    <div>
      <Form2Students/>
    </div>

    <div>
    <Form3Students/>
    </div>

    <div>
      <Form4Students/>
    </div>
  </div>
  );
};
  
export default StudentList;