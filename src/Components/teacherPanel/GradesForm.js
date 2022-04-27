import axios from 'axios';
import React, { useEffect, useState } from 'react'

const GradesForm = () => {

    const [students, setStudents]=useState([]);

    const [student_score, setStudent_score] = useState("");
    const [total_score, setTotal_score] = useState("");
    const [termId, setTermId] = useState("");
    const [studentId, setStudentId] = useState("");
    const [subjectCode, setSubjectCode] = useState("");

    const enterGrade = (student_score,total_score,termId,studentId,subjectCode) =>{
        return axios.post("http://localhost:4000/api/smis/addMark",{
            
            student_score,
            total_score,
            termId,
            studentId,
            subjectCode
            
        })  
    }

    const studentSubjects = async ()=>{
        const response = await axios.get(`http://localhost:4000/api/smis/students/subject/BIO1`)
        setStudents(response.data)
    }  
    
    useEffect(()=>{
        studentSubjects();
    },[])

    const onChangeSubjectCode=(e)=>{
        const subjectCode= e.target.value;
        setSubjectCode(subjectCode); 
    }
    const onChangeStudentId=(e)=>{
        const studentId= e.target.value;

        setStudentId(studentId); 
    }
    const onChangeTermId=(e)=>{
        const termId= e.target.value;
        setTermId(termId); 
    }
    const onChangeStudent_score=(e)=>{
        const student_score= e.target.value;
        setStudent_score(student_score); 
    }
    const onChangeTotal_score=(e)=>{
        const total_score= e.target.value;
        setTotal_score(total_score); 
    }


    const handleSubmit =(e)=>{
        e.preventDefault();

        enterGrade(
            
            student_score,
            total_score,
            termId,
            studentId,
            subjectCode
        )
    }

  return (
    <div>
      <di>
          <button onClick={handleSubmit}> submit</button>
          <table className='table'>
              <thead>
                <tr>
                    <th>Name</th>
                    <th>username</th>
                    <th>Subject</th>
                    <th>Term</th>
                    <th>Obtained Mark</th>
                    <th>Total Mark</th>
                </tr>
                </thead>
                <tbody>
                {students.map((item,index)=>{
                    return(
                        <tr key={index}>
                            <td>
                                {item.firstname}
                            </td>
                            <td>
                                <input 
                                    value={studentId}
                                    onChange={onChangeStudentId}
                                    type="text"
                                    placeholder={item.studentId}
                                />
                            </td>
                            <td>
                                <input 
                                    value={subjectCode}
                                    onChange={onChangeSubjectCode}
                                    type="text"
                                    placeholder={item.subjectCode}
                                />
                            </td>
                            <td>
                                <input 
                                    value={termId}
                                    onChange={onChangeTermId}
                                    type="text"
                                    placeholder='term'
                                />
                            </td>
                            <td>
                                <input 
                                    value={student_score}
                                    onChange={onChangeStudent_score}
                                    type="text"
                                    placeholder='marks obtained'
                                />
                            </td>
                            <td>
                                <input 
                                    value={total_score}
                                    onChange={onChangeTotal_score}
                                    type="text"
                                    placeholder='total marks'
                                />
                            </td>
                        </tr>
                    )
                })

                }
              </tbody>
              
          </table>
      </di>
    </div>
  )
}

export default GradesForm
