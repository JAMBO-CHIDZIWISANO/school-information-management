import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Button, Modal  } from 'react-bootstrap';
import { useParams,  } from "react-router-dom";
import { toast } from "react-toastify";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';


const EnterMarks = () => {

    const {subjectCode} = useParams();

    //define local state that store form data
    const [markId, setMarkId] = useState("")

    const [student_score, setStudent_score] = useState("");
    const [total_score, setTotal_score] = useState("");
    const [termId, setTermId] = useState("");
    const [studentId, setStudentId] = useState("");
    const [subjectCod, setSubjectCode] = useState("");
    const [type, setType] = useState("")

    const [student, setStudent] = useState([])
    const [subject, setSubject] = useState([])
    const [term, setTerm] = useState([])

    const [showGrades,setShowGraes] = useState([])

    const [showAllStudents, setShowAllStudents] = useState([])

    
    //for edit modal
    const [RowData,setRowData] = useState([])
    const [EditShow, setEditShow] = useState(false)
    const handEditShow = () => {setEditShow(true)}
    const handleViewClose = () => {setEditShow(false)}
    
    const loadStudentsId = async ()=>{
      const response = await axios.get(`http://localhost:4000/api/smis/subject/grades/${subjectCode}`)
      setShowGraes(response.data)
    }

    const loadStudentsWhoThisSubject= async ()=>{

      const response = await axios.get(`http://localhost:4000/api/smis//allstudents/subjects/${subjectCode}`)
      setShowAllStudents(response.data)
    }

    useEffect( () => {
      axios.get(`http://localhost:4000/api/smis/subject/${subjectCode}`)
      .then((response) => {
        setSubject(response.data) 
    });
    
      axios.get(`http://localhost:4000/api/smis/student/subject/${subjectCode}`)
      .then((response) => {
        setStudent(response.data) 
    });

      axios.get('http://localhost:4000/api/smis/getAllTerms')
      .then((response) => {
        setTerm(response.data) 
    });

    loadStudentsId();
    loadStudentsWhoThisSubject();
    },[]);
      
  
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
const onChangeType=(e)=>{
  const type= e.target.value;
  setType(type); 
}
  

const enterGrade = (student_score, total_score,studentId,termId,type,subjectCode) =>{
  return axios.post("http://localhost:4000/api/smis/addMark",{
      
      student_score,
      total_score,
      studentId,
      termId,
      type,
      subjectCode
      
  })  
}

//handle submit results form events
const onSubmit = (e) => {
  e.preventDefault()
  enterGrade(
          
    student_score,
    total_score,
    studentId,
    termId,
    type,
    subjectCode
).then(window.location.reload())
}

const handleEdit =()=>{
  const url = `http://localhost:4000/api/smis/mark/${markId}`
  const Credentials = {markId, studentId, student_score, total_score,termId, type}
  axios.put(url, Credentials)
  .then(response=>{
      setRowData( response.data);
      window.location.reload()
   
  })
      
}

// deleting subject
const deleteSubject = (markId) => {
  if (window.confirm('Action is irriversible! Do you really want to delete this?')){
      axios.delete(`http://localhost:4000/api/smis/mark/${markId}`);
      toast.success('User Deleted Successfully');
      // reload window after sometime
      setTimeout( () => loadStudentsId(), 500);
  }
};
 
  

  return (
    <div className=' px-5 wrapper mt-4'>
      <div className='row'>

        <div className='col-12 col-md-10 col-lg-10'>
        <table className='table-bordered table-responsive'>
          <thead>
            <th>
              <select onChange={onChangeStudentId}
                      value={studentId}
                      className="form-control"
              >
                <option>Student</option>
                {student.map((item)=><option >{item.studentId}</option>)}
              </select>
              
            </th>
            <th>
            
            <select onChange={onChangeSubjectCode}
                    className="form-control"
             >

            

              {subject.map((item)=><option value={subjectCod}>{item.subjectCode}</option>)}

            </select>
            </th>
            <select onChange={onChangeTermId} 
                    value={termId}
                    type="number"
                    className="form-control"
            >
              <option>Term</option>
              {term.map((item)=><option >{item.termId}</option>)}

            </select>
            
            <th>
            <select
                  onChange={onChangeType}
                  className="form-control"
                  type="text"
                  value={type}
                  >
                    <option>Exam Type</option>
                    <option>End-Of-Term</option>
                    <option>Assessment</option>
            </select>
            </th>
            <th>
              <input
                type='text'
                placeholder='obtained Mark'
                value={student_score}
                className="form-control"
                onChange={onChangeStudent_score}
              />
            </th>
            <th>
              <input
                type='text'
                placeholder='total marks'
                value={total_score}
                className="form-control"
                onChange={onChangeTotal_score}
              />
            </th>
            <th><Button onClick={onSubmit} className="btn btn-primary " > Submit</Button></th>
            
          </thead>
          <tbody>
            {showGrades.map((item,index)=>{
              return(
                <tr key={index}> 
                  <td>{item.studentId}</td>
                  <td>{item.subjectCode}</td>
                  <td>{item.termName}</td>
                  <td>{item.type}</td>
                  <td>{item.student_score}</td>
                  <td>{item.total_score}</td>
                  <td>
                            
                    <Button className="btn btn-edit"  onClick={()=>{handEditShow(setRowData(item),setMarkId(item._markId))}}><ModeEditIcon/></Button>
                           
                    <button className="btn btn-delete" onClick={() =>deleteSubject(item.markId)} ><DeleteOutlinedIcon/></button>
                               
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
        </div>
        <div className='col-12 col-md-4 col-lg-4 mt-4'>

          {subject.map((su)=>{
            return(
              <h3 className='text-center' key={su.subjectCode}> {su.subjectCode} Students</h3>
            )
            
          })}
         
          
          <table className='table'>
            <thead>
                <tr>
                  <td>No.</td>
                  <td>Username</td>
                  <td>Firstname</td>
                  <td>Surname</td>
                </tr>
            </thead>
            <tbody>
              {showAllStudents.map((st,i)=>{
                return(
                  
                    <tr key={i}>
                      <th scope="row">{i+1}</th>
                      <td>{st.studentId}</td>
                      <td>{st.firstname}</td>
                      <td>{st.surname}</td>
                    </tr>
                  
                )
              })}
            </tbody>
          </table>
        </div>

      </div>
      <div>
      
        <div className='modal-box-view'>
                <Modal
                    show={EditShow}
                    onHide={handleViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Edit Marks</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-group mt-3'>
                            <label htmlFor='markId'>Mark Id</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setMarkId(e.target.value)}
                                defaultValue={RowData.markId}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='studentId'>Username</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setStudentId(e.target.value)}
                                defaultValue={RowData.studentId}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='termId'>Term</label>
                            <input 
                                type="number"
                                className='form-control'
                                onChange={(e)=>setTermId(e.target.value)}
                                defaultValue={RowData.termId}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='student_score'>student score</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setStudent_score(e.target.value)}
                                defaultValue={RowData.student_score}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='total_score'>total score</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setTotal_score(e.target.value)}
                                defaultValue={RowData.total_score}
                            />
                        </div>
                        
                        <div className='form-group mt-3'>
                            <label htmlFor='type'>Type</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setType(e.target.value)}
                                defaultValue={RowData.type}
                            />
                        </div>
                       
                        
                        <Button 
                          onClick={handleEdit} 
                          type="submit" 
                          variant="secondary" 
                          className='btn btn-success mt-4'>Update</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary'  onClick={handleViewClose}>Close</Button>
                    </Modal.Footer> 
                </Modal>
        </div>
      </div>
    </div>
  )}


export default EnterMarks 
 