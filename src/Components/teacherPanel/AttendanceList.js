import axios from "axios";
import React, {useEffect, useState} from "react";
// import { toast } from "react-toastify";


const AttendanceList = () => {
  const [data, setData] = useState([]);

  const loadData = async () => {
      const response = await axios.get("http://localhost:4000/api/smis/getAllAttendances");
      setData(response.data);    
  };
  // refresh window

      useEffect(() => {
          loadData();
      }, []);
    
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th style={{textAlign: "center"}}>No. </th>
            <th style={{textAlign: "center"}}>Firstname</th>
            <th style={{textAlign: "center"}}>Surname</th>
            <th style={{textAlign: "center"}}>Attendance Date</th>
            <th style={{textAlign: "center"}}>Present</th>
            <th style={{textAlign: "center"}}>Absent</th>
            <th style={{textAlign: "center"}}>Absent Reason</th>
          </tr>
          </thead>

          <tbody>
          {data.map((item, index) => {
            return (
              <tr key={item.attendenceId}>
                <th scope="row">{index+1}</th>
                <td>{item.firstname}</td>
                <td>{item.surname}</td>
                <td>{item.attendanceDate}</td>
                <td><input type="checkbox" name='present'/></td>
                <td><input type="checkbox" name='present'/></td>
                <td>
                  <select class="form-select" aria-label="Default select example">
                      <option selected></option>
                      <option value="1">Sick</option>
                      <option value="2">Request</option>
                      <option value="2">Personal</option>
                      <option value="3">Others</option>
                    </select>
                </td>              
            </tr>
            )
        })}
        </tbody>
      </table>

    </div>

  )
}

export default AttendanceList