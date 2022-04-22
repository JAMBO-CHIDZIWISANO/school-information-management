import React, { useEffect, useState } from 'react'
import axios from 'axios'
const NumberOfStudents = () => {

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
                    <table key={i}>
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

                    </table>
                </div>
            )
        })}
      
    </div>
  )
}

export default NumberOfStudents
