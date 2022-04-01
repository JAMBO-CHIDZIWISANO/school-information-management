import React from "react";
//import { Button } from "react-bootstrap";
//import { Link } from "react-router-dom";
//import axios from "axios";
//import { Delete, Edit } from "@mui/icons-material";
const StudentsTableRowMarks = (props) => {

  const { firstname, surname, classId, subjectCode, marks, mark } = props.obj;
  
 
  
  return (
    
    <tr>
      <td>{firstname}</td>
      <td>{surname}</td>
      <td>{classId}</td>
      <td>{subjectCode}</td>
      <td>{marks}</td>
      <td>{mark}</td>
    </tr>
  );
};
  
export default StudentsTableRowMarks;
