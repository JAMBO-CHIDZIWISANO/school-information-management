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
      <div className="">
        {data?.map((item, key) => {
          return ( 
            <div key= {key=key} >

       

        <div className="media-body text-center">
                    <h4>{item.schoolName}  </h4>
                    <small ><i >{item.schoolAdress}</i></small>
                    <p>{item.schoolLocation}</p>
          <strong className="black text-center">Phone :</strong>{" "}{item.schoolPhoneNo}
        </div>
        
        
          {/* <strong className="black">School :</strong>{" "}
          <strong className="black">Address :</strong>{" "}
          <strong className="black">Phone :</strong>{" "}{item.schoolPhoneNo}
          <strong className="black">Location :</strong>{" "} */}
        
       
        
        </div>
        )
        })
        }
        </div>
    </div>
  )
}

export default SchoolDetails