import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import axios from "axios";
import { Delete, Edit } from "@mui/icons-material";
  
const StudentTableRow = (props) => {
  const {studentId, firstname, surname, gender, DoB } = props.obj;
  
  const deleteStudent = () => {
    axios
      .delete(
        `http://localhost:4000/api/smis/student/${studentId}`)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      }
      
      )
      .catch((err) => alert("Something went wrong"));
  };

  const updateAPIData = () => {
    axios.put(`http://localhost:4000/api/smis/student/${studentId}`, {
        firstname,
        surname,
        DoB
	})
}
  
  return (
    <tr>
      <td>{firstname}</td>
      <td>{surname}</td>
      <td>{gender}</td>
      <td>{DoB}</td>
      <td>
        <Link className="edit-link" 
          to={"/edit-student/"}
          onClick={updateAPIData}>

          <Edit />
        </Link>
        <Button onClick={deleteStudent} 
          size="sm" variant="danger">
          <Delete />
        </Button>
      </td>
    </tr>
  );
};
  
export default StudentTableRow;
