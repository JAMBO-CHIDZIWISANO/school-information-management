import React, { useState, useEffect, useRef } from "react"
import {Link} from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";
import { useReactToPrint } from "react-to-print";

import { Button, Table, Modal } from "react-bootstrap";
import { DeleteOutline, Edit, PersonAddAlt1Sharp } from "@mui/icons-material";

const DisplayParents = () => {
    const [pData, setPData] = useState([]);

    //for edit model
    const [RowData,setRowData] = useState([])
    const [EditShow, setEditShow] = useState(false)
    const handEditShow = () => {setEditShow(true)}
    const handleViewClose = () => {setEditShow(false)}

    //define local state that store form data
    const [parentId, setParentId] = useState("")
    const [firstname, setFirstname] = useState("") 
    const [surname, setSurname] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [gender, setGender] = useState("")
    const [address, setAddress] = useState("")
    const [userId, setUserId] = useState("")

    //handle edit parent function
    const handleEdit =()=>{
        const url = `http://localhost:4000/api/smis/parent/${parentId}`
        const Credentials = {parentId, firstname, surname, phoneNo, gender, address, userId}
        axios.put(url, Credentials)
        .then(response=>{
            setRowData( response.data);
            window.location.reload()
         
        })
            
    }

    const loadData = async () => {
        const response = await axios.get("http://localhost:4000/api/smis//getAllParents");
        setPData(response.data);
        
    };
    // refreshing the window
    useEffect(() => {
        loadData();
    }, []);

    // deleting user
    const deleteUser = (parentId) => {
        if (window.confirm("Are you sure you want to delete this User ?")
        ) {     
          axios.delete(`http://localhost:4000/api/smis/parent/${parentId}`);

          toast.success("User Deleted Successfully");
          // refreshing the window
          setTimeout(() => loadData(), 500);
        }
    };

    //define print list of parent function refs
    const componentRef = useRef()
    const handlePrintListofParents = useReactToPrint({
        content: ()=>componentRef.current,
    });

  return (
    <div style={{marginTop: "40px"}} className="container">

<hr />
      <div style={{textAlign: "right"}}>

        <Button variant="primary"
            onClick={handlePrintListofParents}>
                print parents List
        </Button>
        <Link to={"/admin/add-sdparent"}> 
            <Button variant="primary">
                <PersonAddAlt1Sharp/>
            </Button>
        </Link>
      </div>
      <hr/>
        <div ref={componentRef}>
        <h1 className="text-center">LIST OF Parents</h1>
        <Table className="table-bordered table-hover table-striped">
            <thead>
               
                
                <tr>
                    <th>No. </th>
                    <th>Firstname</th>
                    <th>Surname</th>
                    <th>Gender</th>
                    <th>Phone Number</th>
                    <th>Address</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {pData.map((item, index) => {
                    return (
                        <tr key={item.parentId}>
                                <th scope="row">{index+1}</th>
                                <td>{item.firstname}</td>
                                <td>{item.surname}</td>
                                <td>{item.gender}</td>
                                <td>{item.phoneNo}</td>
                                <td>{item.address}</td>
                                <td>
                                    
                                        <Button  onClick={()=>{handEditShow(setRowData(item),setParentId(item._parentId))}} variant="primary">
                                            <Edit/>
                                        </Button>
                                    
                                    <button className="btn btn-delete" onClick={() => deleteUser(item.parentId)}><DeleteOutline/></button>
                                </td>
                        </tr>
                    )
                })}
            </tbody>
        </Table>
        </div>

        <div className='modal-box-view'>
                <Modal
                    show={EditShow}
                    onHide={handleViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Edit Parent</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-group mt-3'>
                            <label htmlFor='parentId'>Parent Id</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setParentId(e.target.value)}
                                defaultValue={RowData.parentId}
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
                            <label htmlFor='phoneNo'>Phone No</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setPhoneNo(e.target.value)}
                                defaultValue={RowData. phoneNo}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='gender'>gender</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setGender(e.target.value)}
                                defaultValue={RowData.gender}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='address'>Address</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setAddress(e.target.value)}
                                defaultValue={RowData.address}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='subjectName'>Username</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setUserId(e.target.value)}
                                defaultValue={RowData.userId}
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

export default DisplayParents;