import React,{useEffect, useState} from 'react'
import authService from '../services/auth.service';
import axios from 'axios';
import img from "../../assets/img_avatar3.png"
import { useNavigate, useParams } from 'react-router-dom';


const ChildrenInfo = () => {

    const navigate = useNavigate();
    const {studentId} = useParams();

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
    <div className='container mt-3 mb-3'>
        <h3 className='text-center'>List Of Your Children Admitted At Our School</h3>
        {children.map((item,i)=>{
            return(
                <div className="media border p-4  mt-2">
                    
                <img src={img } alt="" className="mr-1 mt-1 rounded-circle" style={{width:30}}/>
                <div className="media-body">
                    <h4>{item.firstname} {item.surname} {item.studentId} <small onClick={() => {navigate(`/school-report/${item.studentId}`)}}><i ><button className='btn btn-primary btn-primary'>View Report Card</button> </i></small></h4>
                    <p>{item.className} Student</p>
                </div>
                </div>
            )
        })}
      
      
      
    </div>
  )
}

export default ChildrenInfo
