import React from "react";

const StudentsTableRowMarks = (props) => {

  const { firstname, surname, className, subjectName, student_score, totalScore,percent,Grade,type } = props.obj;
  
 
  
  return (
    
    <tr>
        <td>{firstname}</td>
        <td>{surname}</td>
        <td>{className}</td>
        <td>{subjectName}</td>
        <td>{student_score}</td>
        <td>{totalScore}</td>
        <td>{percent}</td>
        <td>{Grade}</td>
        <td>{type}</td>
    </tr>
  );
};
  
export default StudentsTableRowMarks;
