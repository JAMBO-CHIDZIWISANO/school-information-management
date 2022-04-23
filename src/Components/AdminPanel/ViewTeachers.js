import React, { useState, useEffect } from "react"
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import "./Home.css";
import { Button,Modal } from "react-bootstrap";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import { PersonAddAlt1Sharp } from "@mui/icons-material";

const ViewTeachers = () => {
    const [data, setData] = useState([]);

    //for edit modal
    const [RowData,setRowData] = useState([])
    const [EditShow, setEditShow] = useState(false)
    const handEditShow = () => {setEditShow(true)}
    const handleViewClose = () => {setEditShow(false)}
   
    //define local state that store form data
    const [teacherId, setTeacherId] = useState("") 
    const [firstname, setFirstname] = useState("")
    const [surname, setSurname] = useState("")
    const [gender, setGender]=useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [qualification, setQualification]=useState("");
    const [joinDate, setJoinDate]=useState("")

    const handleEdit =()=>{
        const url = `http://localhost:4000/api/smis/teacher/${teacherId}`
        const Credentials = {firstname,surname, gender, phoneNo, qualification, joinDate ,teacherId}
        axios.put(url, Credentials)
        .then(response=>{
            setRowData( response.data);
            window.location.reload()
        })
    }
    // retrieving teacher information from database
    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/api/smis/getAllTeachers");
        setData(response.data);
        
    };
    // refreshing the window
    useEffect(() => {
        loadData();
    }, []);

    // deleting user
    
    const deleteTeacher = (teacherId) => {
        if (window.confirm('Action is irriversible! Do you really want to delete this?')){
            axios.delete(`http://localhost:4000/api/smis/teacher/${teacherId}`);
            toast.success('User Deleted Successfully');
            // reload window after sometime
            setTimeout( () => loadData(), 500);
        }
    };

    

  return (
    <div style={{marginTop: "10px"}} className="container">
          <hr />
      <div style={{textAlign: "right"}}>

      <Link to={"/admin/teacher-record"}> 
        <Button  variant="primary">
          back
        </Button>
      </Link>

        
    
        <Link to={"/admin/add-sdteacher"}> 
            <Button variant="primary">
                <PersonAddAlt1Sharp/>
            </Button>
        </Link>
      </div>
      <hr/>
        <h1 className="text-center">LIST OF TEACHERS</h1>
        <table className="table">
            <thead>
                <tr>
                    <th style={{textAlign: "center"}}>No. </th>
                    <th style={{textAlign: "center"}}>Firstname</th>
                    <th style={{textAlign: "center"}}>Surname</th>
                    <th style={{textAlign: "center"}}>Gender</th>
                    <th style={{textAlign: "center"}}>Phone</th>
                    <th style={{textAlign: "center"}}>Qualification</th>
                    <th style={{textAlign: "center"}}>Join Date</th>
                    <th style={{textAlign: "center"}}>Action</th>
                </tr>
            </thead>

            <tbody>
                {data.map((item, index) => {
                    return (
                    <tr key={item.teacherId} >
                        <th scope="row">{index+1}</th>
                        <td>{item.firstname}</td>
                        <td>{item.surname}</td>
                        <td>{item.gender}</td>
                        <td>{item.phoneNo}</td>
                        <td>{item.qualification}</td>
                        <td>{item.joinDate}</td>
                        <td>
                           
                        <Button className="btn btn-edit"  onClick={()=>{handEditShow(setRowData(item),setTeacherId(item._teacherId))}}><ModeEditIcon/></Button>                           
                        <button className="btn btn-delete" onClick={() => deleteTeacher(item.teacherId)}><DeleteOutlinedIcon/></button>
                            
                        </td>
                    </tr>
                    )
                })}
            </tbody>
        </table>

        <div className='modal-box-view'>
                <Modal
                    show={EditShow}
                    onHide={handleViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Edit Teacher</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-group mt-3'>
                            <label htmlFor='teacherId'>Teacher username</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setTeacherId(e.target.value)}
                                defaultValue={RowData.teacherId}
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
                            <label htmlFor='surname'>Surname</label>
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
                            <label htmlFor='phoneNo'>Phone No</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setPhoneNo(e.target.value)}
                                defaultValue={RowData.phoneNo}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='qualificatin'>Qualification</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setQualification(e.target.value)}
                                defaultValue={RowData.qualification}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='joinDate'>Subject Name</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setJoinDate(e.target.value)}
                                defaultValue={RowData.joinDate}
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
  )
}

export default ViewTeachers;