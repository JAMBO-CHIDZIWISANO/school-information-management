import React, {useState, useEffect  } from 'react'
import axios from 'axios'
import authService from '../services/auth.service'


const GetCurrentUser = () => {

    //setting the state variable
    const [details, setData] = useState([])

    const currentUser = authService.getCurrentUser();


    const parentInfo = async ()=>{
        const response = await axios.get(`http://localhost:4000/api/smis/parents/${currentUser.username}`);
        setData(response.data);
    }

    

   

    useEffect(()=>{
        parentInfo();
       
        
    },[]);

    
  return (
    <div className='container'>
        
        <h2 className='text-center mt-4'>Parent Panel Information  </h2>
        <div className=''>

       
            { details.map((item,i)=>{
                    return (
                        <div key={i}>
                        <table className='table'>
                            
                            <body>
                                <tr>
                                    <td><strong>Username</strong></td>
                                    <td>{item.parentId}</td>
                                </tr>
                                <tr>
                                    <td><strong>Firstname</strong></td>
                                    <td>{item.firstname}</td>
                                </tr>
                                <tr>
                                    <td><strong>Surname</strong></td>
                                    <td>{item.surname}</td>
                                </tr>
                                <tr>
                                    <td><strong>Email</strong></td>
                                    <td>{item.email}</td>
                                </tr>
                                <tr>
                                    <td><strong> Phone Number</strong> </td>
                                    <td>{item.phoneNo}</td>
                                </tr>
                            </body>
                        </table>
                        </div>
                    )
                })
            }
        </div>
        
        <div>
           

            </div>
            
        </div>
      
    
  )
}

export default GetCurrentUser
