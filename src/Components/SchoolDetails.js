import axios from "axios";
import React, {useEffect, useState} from "react";

// import { toast } from "react-toastify";


const SchoolDetails = () => {
    const [data, setData] = useState([]);


    const loadData = async () => {
      const response = await axios.get("http://localhost:4000/api/smis/getAllSchol");
      setData(response.data);   
      console.log(data) 
  };
  // refresh window

      useEffect(() => {
          loadData();
      }, []);
    
 
  //   const loadData = async () => {
  //     const response = await axios.get(`http://localhost:4000/api/smis/school/${schoolId}`);
  //     setData(response.data);   
  //     console.log(data) 
  // };
  // // refresh window

  //     useEffect(() => {
  //         loadData();
  //     }, []);
    
  return (
    <div className="container">
      <div className="details2">
        {data?.map((item, key) => {
          return ( 
            <div key= {key=key} >

        <div className="uza"><strong className="black">School :</strong>{" "}{item.schoolName}</div>
        <div className="uza"><strong className="black">Address :</strong>{" "}{item.schoolAdress}</div>
        <div className="uza"><strong className="black">Phone :</strong>{" "}{item.schoolPhoneNo}</div>
        <div className="uza"><strong className="black">Location :</strong>{" "}{item.schoolLocation}</div>
        </div>
        )
        })
        }
        </div>
    </div>
  )
}

export default SchoolDetails