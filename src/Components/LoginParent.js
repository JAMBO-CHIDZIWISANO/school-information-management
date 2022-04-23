import React, {useState, useEffect  } from 'react'
import axios from 'axios'
import authService from './services/auth.service'


const GetCurrentUser = () => {

    //setting the state variable
    const [details, setData] = useState([])
    const [children, setChildren] = useState([])
    const [childrenExam, setChildrenExam] = useState([])

    const currentUser = authService.getCurrentUser();

    const parentInfo = async ()=>{
        const response = await axios.get(`http://localhost:4000/api/smis/parents/${currentUser.username}`);
        setData(response.data);
    }

    const childrenInfo = async () =>{
        const response = await axios.get(`http://localhost:4000/api/smis//children/${currentUser.username}`);
        setChildren(response.data)
    }

    const examInfo = async () => {
        const response = await axios.get(`http://localhost:4000/api/smis/childrenExam/${currentUser.username}`);
        setChildrenExam(response.data)
    }

    useEffect(()=>{
        parentInfo();
        childrenInfo();
        examInfo();
    },[]);

    
  return (
    <div className='container'>
        
        <h2 className='text-center mt-4'>Parent Panel Information <hr/> </h2>
        <div className=''>

       
            { details.map((item,i)=>{
                    return (
                        <div key={i}>
                        <table className='table'>
                            
                            <body>
                                <tr>
                                    <td>Username</td>
                                    <td>{item.parentId}</td>
                                </tr>
                                <tr>
                                    <td>Firstname</td>
                                    <td>{item.firstname}</td>
                                </tr>
                                <tr>
                                    <td>Surnamec</td>
                                    <td>{item.surname}</td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>{item.email}</td>
                                </tr>
                                <tr>
                                    <td> Phone Number </td>
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
            <h2 className='text-center'>Children Information <hr/></h2>

            <div className='row'>

                <div className='col-12 col-md-4 col-lg-4'>
                    <h2>Student Personal Information</h2>
                    <hr/>
                    {
                children.map((item,i)=>{
                    return (
                        <div key={i}>
                        <table className='table mt-2'>
                            <body>
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
                <div className='col-12 col-md-8 col-lg-8'>
                <h2>Student Personal Information</h2>
                    <hr/>

                
                        <div >
                        <table className='table mt-2'>
                        <thead>
                            
                            <tr>
                            <th>student username</th>
                            <th>Subjects</th>
                            <th>Student Score</th>
                            <th>Total Score</th>
                            <th>Grade</th>
                            <th>Remarks</th>
                            </tr>
                            
                        </thead>
                           
                            {
                childrenExam.map((item,i)=>{
                    return (
                        <tbody key={i}> 
                                
                                <tr  >
                                <td>{item.studentId}</td>
                               
                                    <td>{item.subjectName}</td>
                            
                                    <td>{item.student_score}</td>
                                   
                                    
                                    <td>{item.remarks}</td>
                                  
                                    <td>{item.total_score}</td>
                                   
                                    <td>{item.grade}</td>
                                </tr>
                                </tbody>
                                 )
                                })
                            }
                               
                           
                        </table>
                        </div>
                   
                    


                </div>

            </div>
            
        </div>
      
    </div>
  )
}

export default GetCurrentUser
