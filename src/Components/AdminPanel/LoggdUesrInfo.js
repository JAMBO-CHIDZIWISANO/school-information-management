import React, { useEffect, useState } from 'react'
import axios from 'axios'
import girl from '../../assets/girl.jpg'
import boy from '../../assets/img_avatar3.png'

const LoggedUserInfo = () => {

    const [counter, setCounter] = useState([]);

    const numStudents = async () =>{
        const response = await axios.get('http://localhost:4000/api/smis/getNumberofAllStudents')
        setCounter(response.data)
    };

    useEffect(()=>{
        numStudents()
    },[])
  return (
    <div className='container'>

        {counter.map((item, i)=>{
            return(
                <div>
                    <div className=""  key={i}>
                        
                        <div className="">
                            <p><img src={girl } alt="" className="mr-1 mt-1 rounded-circle" style={{width:30}}/>  Female Students: {item.female_count} </p>
                            <p><img src={boy} alt="" className="mr-1 mt-1 rounded-circle" style={{width:30}}/>  Male Students:    {item.male_count} </p>
                            <p>Total Number : {item.all_students} </p>
                    </div>
                </div>

                
                    {/* <table>

                        <tbody>
                        <tr>
                            <td>Male Students </td>
                            <td>{item.male_count}</td>
                            
                        </tr>
                        <tr>
                            <td>Female Students </td>
                            <td>{item.female_count}</td>
                            
                        </tr>
                        <tr>
                            <td>Total Number </td>
                            <td>{item.all_students}</td>
                            
                        </tr>
                        </tbody>

                    </table> */}
                </div>
            )
        })}
      
    </div>
  )
}

export default LoggedUserInfo
