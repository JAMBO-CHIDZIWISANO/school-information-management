import React,{useEffect, useState} from 'react'
import authService from '../services/auth.service';
import axios from 'axios';


const ChildrenInfo = () => {

    const [children, setChildren] = useState([])

    const currentUser = authService.getCurrentUser();
    //retrive children infor
    const childrenInfo = async () =>{
        const response = await axios.get(`http://localhost:4000/api/smis//children/${currentUser.username}`);
        setChildren(response.data)
    }

    useEffect(()=>{
       
        childrenInfo();
        
    },[]);
  return (
    <div className='container'>
      
      <div className=''>
                    
                    {
                children.map((item,i)=>{
                    return (
                        <div key={i}>
                        <table className='table mt-2'>
                            <body>
                            <tr>
                                    <td>Username</td>
                                    <td>{item.studentId}</td>
                                </tr>
                                <tr>
                                    <td>Firstname</td>
                                    <td>{item.firstname}</td>
                                </tr>
                                <tr>
                                    <td>Surname</td>
                                    <td>{item.surname}</td>
                                </tr>
                                <tr>
                                    <td>Class</td>
                                    <td>{item.className}</td>
                                </tr>
                            </body>
                        </table>
                        </div>
                    )
                })
            }
                </div>
    </div>
  )
}

export default ChildrenInfo
