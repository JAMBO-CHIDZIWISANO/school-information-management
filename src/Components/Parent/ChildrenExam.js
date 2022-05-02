import React, { useEffect,useState } from 'react'
import authService from '../services/auth.service'
import axios from 'axios'
const ChildrenExam = () => {
    //define childrem exam variable state
    const [childrenExam, setChildrenExam] = useState([])
    const [childrenExamStatus, setChildrenExamStatus] = useState([])

    //define local storage data variable
    const currentUser = authService.getCurrentUser();

    //function that retrieve examination
    const examInfo = async () => {
        const response = await axios.get(`http://localhost:4000/api/smis/childrenExam/${currentUser.username}`);
        setChildrenExam(response.data)
    }

     //function that retrieve children exam status
     const status = async () => {
        const response = await axios.get(`http://localhost:4000/api/smis/parent/childrenInfo/${currentUser.username}`);
        setChildrenExamStatus(response.data)
    }

    //use effect that refresh window and load data
    useEffect(()=>{
        examInfo()
        status()
    },[])

  return (
    <div className='mt-5'>
     
                    

               
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
                        <tbody  key={i}> 
                        
                                <tr  >
                                <td>{item.studentId}</td>
                               
                                    <td>{item.subjectName}</td>
                            
                                    <td>{item.student_score}</td>
                                  
                                    <td>{item.totalScore}</td>
                                   
                                    <td>{item.grade}</td>
                                    <td>{item.remarks}</td>
                                </tr>
                                </tbody>
                                  
                           )
                        })
                    }
                        </table>
                        </div>
                         
                     

                        {childrenExamStatus?.map((item,ky)=>{
                            return(
                                <div className='container table mt-3 ' >
                            <table key={ky}>
                                
                                <tbody>
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
                                    <tr>
                                        <td>Term</td>
                                        <td>{item.termName}</td>
                                    </tr>
                                    <tr>
                                        <td>Full Marks</td>
                                        <td>{item.fullmarks}</td>
                                        <td>Obtained Marks</td>
                                        <td>{item.marks}</td>
                                    </tr>
                                    <tr>
                                        <td>Comments</td>
                                        <td>{item.comments}</td>
                                        <td>Status</td>
                                        <td>{item.status}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
 
                            )
                        })}
                                      
    </div>
  )
}

export default ChildrenExam
