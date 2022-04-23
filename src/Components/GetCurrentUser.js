import React, {useState, useEffect  } from 'react'
import axios from 'axios'
import authService from './services/auth.service'


const GetCurrentUser = () => {

    //setting the state variable

    const [details, setData] = useState([])
    const currentUser = authService.getCurrentUser();
    const parentInfo = async ()=>{
        const response = await axios(`http://localhost:4000/api/smis/parents/${currentUser.username}`);
        setData(response.data);
       
    }
    useEffect(()=>{
        parentInfo();
    },[]);

    
  return (
    <div className='container'>
        
        <h2 className='text-center mt-4'>Parent Panel Information <hr/> </h2>
            {
                details.map((item,i)=>{
                    return (
                        <div key={i}>
                            {item.email}<br/>
                            {item.surname}

                        </div>
                    )
                })
            }
        <div>
            Firstname : Jambo<br/>
            Surname :{details.surname} <br/>
            Email : {details.email}<br/>
        </div>
        
        <div>
            <h2 className='text-center'>Children Information <hr/></h2>

            <div className='row'>

                <div className='col-12 col-md-6 col-lg-6'>
                    <h2>Student Personal Information</h2>
                    <hr/>
                    Firstname : Jambo<br/>
                    Surname :{details.surname} <br/>
                    Email : {details.email}<br/>
                </div>
                <div className='col-12 col-md-6 col-lg-6'>
                    <h2>Student Personal Information</h2>
                    <hr/>
                    Firstname : Jambo<br/>
                    Surname :{details.surname} <br/>
                    Email : {details.email}<br/>


                </div>

            </div>
            
        </div>
      
    </div>
  )
}

export default GetCurrentUser
