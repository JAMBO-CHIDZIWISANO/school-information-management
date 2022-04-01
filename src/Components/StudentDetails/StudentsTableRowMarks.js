import React from "react";

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
