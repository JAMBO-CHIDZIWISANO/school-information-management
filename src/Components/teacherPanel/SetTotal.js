import axios from "axios";
import { Button, Modal } from "react-bootstrap";
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import ModeEditIcon from '@mui/icons-material/ModeEdit';
import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const SetTotal = () => {

    const {subjectCode} = useParams();

    const [subject, setSubject] = useState([]);


    
    //constructor that bind state change
    const [totalScore, setTotalScore] = useState('');
    const [totalId, setTotalId] = useState('')
    const [totalS, setTotalS] = useState([]);

     //for edit modal
     const [RowData,setRowData] = useState([])
     const [EditShow, setEditShow] = useState(false)
     const handEditShow = () => {setEditShow(true)}
     const handleViewClose = () => {setEditShow(false)}

     

    
    //handle on input change of subject function
    const onChangeTotalScore=(e)=>{
       const totalScore = e.target.value
        setTotalScore(totalScore)
    }

    const handleEdit =()=>{
        const url = `http://localhost:4000/api/smis/total/${totalId}`
        const Credentials = {totalId, totalScore}
        axios.put(url, Credentials)
        .then(response=>{
            setRowData( response.data);
            window.location.reload()
         
        })
            
      }
   
        
    

    const loadTotal = async ()=>{
        const response = await axios.get(`http://localhost:4000/api/smis/subject/total/${subjectCode}`)
        setTotalS(response.data)
      }

    useEffect(()=>{
        axios.get(`http://localhost:4000/api/smis/subject/${subjectCode}`)
            .then((response) => {
            setSubject(response.data) 
        }); 

       loadTotal();
    },[]);

    const total = (totalScore, subjectCode) =>{
        return axios.post('http://localhost:4000/api/smis/addTotal',{
            totalScore,
            subjectCode
        })  
      }
    
    // deleting subject
    const deleteTotal = (totalId) => {
        if (window.confirm('Action is irriversible! Do you really want to delete this?')){
            axios.delete(`http://localhost:4000/api/smis/total/${totalId}`);
            toast.success('User Deleted Successfully');
            // reload window after sometime
            setTimeout( () => loadTotal(), 500);
        }
    };

    //on form submit post data
    const onSubmit=(e)=>{
        e.preventDefault()
        total(
            totalScore,
            subjectCode
        ).then(window.location.reload())

        }

    

    
        return (
            <div>
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-6">
                        <form onSubmit={onSubmit} className=" container w-50 p-3 mt-5">
                            
                                
                                <div className='form-group  '>
                                <h5 className="text-center mt-3"> Set Total Score</h5>
                                    <input 
                                    placeholder=" Set total Score"
                                    value={totalScore}
                                    onChange={onChangeTotalScore}
                                    />
                            

                                <Button onClick={onSubmit}> Submit</Button>
                                </div>
                             
                        </form>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 ">
                        <table className="flex align-content-center justify-content-center mt-5">
                            <tbody>
                                {totalS.map((item,index)=>{
                                    return(
                                <tr key={index}>
                                    <td>Total Mark</td>
                                    <td>{item.totalScore}</td>
                                    <td>
                                    <Button className="btn btn-edit"  onClick={()=>{handEditShow(setRowData(item),setTotalId(item._totalId))}}><ModeEditIcon/></Button>
                           
                                    <button className="btn btn-delete" onClick={() =>deleteTotal(item.totalId)} ><DeleteOutlinedIcon/></button>
                                    </td>
                                </tr>)})}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className='modal-box-view'>
                <Modal
                    show={EditShow}
                    onHide={handleViewClose}
                    backdrop="static"
                    keyboard={false}
                >
                    <Modal.Header>
                        <Modal.Title>Edit Total</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className='form-group mt-3'>
                            <label htmlFor='markId'>Total Id</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setTotalId(e.target.value)}
                                defaultValue={RowData.totalId}
                            />
                        </div>
                        <div className='form-group mt-3'>
                            <label htmlFor='totalScore'>total score</label>
                            <input 
                                type="text"
                                className='form-control'
                                onChange={(e)=>setTotalScore(e.target.value)}
                                defaultValue={RowData.totalScore}
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
        );
    }


export default SetTotal;