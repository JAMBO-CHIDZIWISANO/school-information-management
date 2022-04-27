import axios from "axios";
import React, {useEffect, useState} from "react";
// import { toast } from "react-toastify";


const WholeTimetable = () => {
  const [tableData, setTableData] = useState([]);

  const timeTable = async () => {
    
    //declare state variables
      const response = await axios.get("http://localhost:4000/api/smis/getAllTeachersTimetable");
      setTableData(response.data);    
  };
  // refresh window

      useEffect(() => {
        timeTable();
      }, []);
    
  return (
    <div className="container ">
      <table className=" table table-bordered table-responsive table-striped">
        <thead>
          <tr>
            <th >Teacher Id </th>
            <th >Surname</th>
            <th >Day</th>
            <th >Subject</th>
            <th >Class</th>
            <th >ClassRoom</th>
            <th >Start</th>
            <th >End</th>
          </tr>
          </thead>

          <tbody>
          {tableData?.map((item, index) => {
            return (
              <tr key={item.lessonId}>
                
                <td>{item.teacherId}</td>
                <td>{item.surname}</td>
                <td>{item.day}</td>
                <td>{item.subjectName}</td>
                <td>{item.className}</td>
                <td>{item.roomName}</td>
                <td>{item.lesson_startTime}</td>
                <td>{item.lesson_endTime}</td>
                
              
                           
            </tr>
            )
        })}
        </tbody>
      </table>

    </div>

  )
}

export default WholeTimetable