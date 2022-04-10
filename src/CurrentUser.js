// import React, {useState, useEffect} from 'react'
// import AuthService from "./Components/services/auth.service"
// import axios from 'axios'
// import { Table } from 'react-bootstrap'

// const CurrentUser = () => {

  //   const current = AuthService.getCurrentUser()
  //   const [ data, setData ] = useState()

  //   const load= () => {
  //     const response =  axios.get(`http://localhost:4000/api/smis/studentd/${current.username}`);
  //     return setData(response.data);
  //   };
  //     useEffect(() => {
  //       load();
  // }, []);

//     return (
//     <div className="container">

//           <table className="table">
//             <thead>
//                 <tr>
//                     <th style={{textAlign: "center"}}>No. </th>
//                     <th style={{textAlign: "center"}}>Firstname</th>
//                     <th style={{textAlign: "center"}}>Surname</th>
//                     <th style={{textAlign: "center"}}>Email</th>
//                     <th style={{textAlign: "center"}}>Class</th>
//                     <th style={{textAlign: "center"}}>School</th>
//                     <th style={{textAlign: "center"}}>Action</th>
//                 </tr>
//             </thead>

//             <tbody>
//                 {data.map((item, index) => {
//                     return (
//                         <tr key={item.index} >
//                                 <th scope="row">{index+1}</th>
//                                 <td>{item.firstname}</td>
//                                 <td>{item.surname}</td>
//                                 <td>{item.email}</td>
//                                 <td>{item.className}</td>
//                                 <td>{item.schoolName}</td>
//                                 <td>
                                   
//                                 </td>
//                         </tr>
//                     )
//                 })}
//             </tbody>
//         </table>    
     
//     </div>
//   )
// }

// export default CurrentUser
