import React, { useEffect, useState } from 'react'
import axios from 'axios'
import girl from '../../assets/girl.jpg'
import boy from '../../assets/img_avatar3.png'
const NumberOfTeachers = () => {

    const [counter, setCounter] = useState([]);

    const numTeachers = async () =>{
        const response = await axios.get('http://localhost:4000/api/smis/countAllTeachers')
        setCounter(response.data)
    };

    useEffect(()=>{
        numTeachers()
    },[])
  return (
    <div className='container'>

        {counter.map((item, i)=>{
            return(
                <div>
                    
                    <div className="">
                            <p><img src={girl } alt="" className="mr-1 mt-1 rounded-circle" style={{width:30}}/>  Female Students: {item.female_count} </p>
                            <p><img src={boy} alt="" className="mr-1 mt-1 rounded-circle" style={{width:30}}/>  Male Teachers:    {item.male_count} </p>
                            <p>Total Number : {item.all_teachers} </p>
                    </div>
                    
                </div>
            )
        })}
      
    </div>
  )
}

export default NumberOfTeachers
