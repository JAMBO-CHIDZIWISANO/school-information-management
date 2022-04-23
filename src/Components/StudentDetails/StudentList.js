
import React, { useState, useEffect } from "react";
import axios from "axios";
import {Table } from "react-bootstrap";
import { Delete, Edit } from "@mui/icons-material";
import Form1Students from "./Form1Students"
import Form2Students from "./Form2Students"
import Form3Students from "./Form3Students"
import Form4Students from "./Form4Students"
import {Modal, Button} from  'react-bootstrap'
import { toast } from "react-toastify";

const StudentList = () => {
  const [students, setStudents] = useState([]);

  //for edit modal
  const [RowData,setRowData] = useState([])
  const [EditShow, setEditShow] = useState(false)
  const handEditShow = () => {setEditShow(true)}
  const handleViewClose = () => {setEditShow(false)}
 
  //define local state that store data
  const [firstname, setFirstname]= useState("")
  const [surname, setSurname]= useState("")
  const [gender, setGender]= useState("")
  const [classId, setClassId]= useState("")
  const [DoB, setDoB]= useState("")
  const [studentId, setStudentId]= useState("")
  const [parentId, setParentId]=useState("")

  //handle edit function
  const handleEdit =()=>{
    const url = `http://localhost:4000/api/smis/student/${studentId}`
    const Credentials = {firstname, surname, gender, DoB, classId,parentId, studentId}
    axios.put(url, Credentials)
    .then(response=>{
        setRowData( response.data);
        window.location.reload()
    })     
  }
  
  useEffect(() => {
    dataTable();
  },[]);
  
  const dataTable = async () => {
    const response = await axios.get("http://localhost:4000/api/smis/getAllStudents")
    setStudents(response.data)
  };

   //delete operation
   const deleteStudent = (studentId) => {
     if(window.confirm('this action irreversible! Do you want to continue...')){
      axios.delete(`http://localhost:4000/api/smis/student/${studentId}`)
      .then((res) => {
        if (res.status === 200) {
          toast.success("Student successfully deleted");
          window.location.reload();
        } else Promise.reject();
      }
      
      )
      .catch((err) => alert("Something went wrong"));
     }
    
  };
  
  return (
 

    <div className="row">
      <h2 className="text-center">Table for All Students</h2>
    <div className="">


      <Table className="table-striped table-hover table-bordered" >
        <thead>
          <tr>
            <th>Firstname</th>
            <th>Surname</th>
            <th>Gender</th>
            <th>DoB</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {students.map((item, index)=>{
            return (
              <tr key={index}>

                <td>{item.firstname}</td>
                <td>{item.surname}</td>
                <td>{item.gender}</td>
                <td>{item.DoB}</td>
                <td>
                  <Button className="btn btn-edit"  onClick={()=>{handEditShow(setRowData(item),setStudentId(item._studentId))}}> <Edit/></Button>
                  <Button onClick={() =>deleteStudent(item.studentId)}
                    size="sm" variant="danger">
                    <Delete />
                  </Button>
                </td>
              </tr>
            );
          })}
        
        </tbody>
      </Table>

      <div className='modal-box-view'>
                <Modal
                    show={EditShow}
                    onHide={handleViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Edit Student</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-group mt-3'>
                            <label htmlFor='studentId'>Student Id</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setStudentId(e.target.value)}
                                defaultValue={RowData.studentId}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='firstname'>Firstname</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setFirstname(e.target.value)}
                                defaultValue={RowData.firstname}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='firstname'>Surname</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setSurname(e.target.value)}
                                defaultValue={RowData.surname}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='gender'>Gender</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setGender(e.target.value)}
                                defaultValue={RowData.gender}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='classId'>Class</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setClassId(e.target.value)}
                                defaultValue={RowData.classId}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='subjectName'>Date of Birth</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setDoB(e.target.value)}
                                defaultValue={RowData.DoB}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='parentId'>Parent Username</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setParentId(e.target.value)}
                                defaultValue={RowData.parentId}
                            />
                        </div>
                    <Button onClick={handleEdit} type="submit" variant="secondary" className='btn btn-success mt-4'>Update</Button>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant='secondary'  onClick={handleViewClose}>Close</Button>
                    </Modal.Footer> 
                </Modal>
        </div>


     

    </div>

    <div>
      <Form1Students/>
    </div>

    <div>
      <Form2Students/>
    </div>

    <div>
    <Form3Students/>
    </div>

    <div>
      <Form4Students/>
    </div>
  </div>
  );
};
  
export default StudentList;