
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import StudentTableRow from "./StudentTableRow";
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
    <div>

      <div className="row">
        <div className="">
          <Link to="/add-student">
          <Button variant="primary"><i className="fa fa-plu"> </i>
            Add Student
          </Button>
          </Link>
        </div>
      </div>

    <div className="row">
    <div className="table-responsive">

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

    </div>

    </div>
  );
};
  
export default StudentList;