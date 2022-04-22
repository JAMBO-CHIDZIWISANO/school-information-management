import React, { useEffect, useState } from 'react'
import axios from 'axios'
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
                    <table key={i}>
                        <tbody>
                        <tr>
                            <td>Male Teachers </td>
                            <td>{item.male_count}</td>
                            
                        </tr>
                        <tr>
                            <td>Female Teachers </td>
                            <td>{item.female_count}</td>
                            
                        </tr>
                        <tr>
                            <td>Total Number </td>
                            <td>{item.all_teachers}</td>
                            
                        </tr>
                        </tbody>

                    </table>
                </div>
            )
        })}
      
    </div>
  )
}

export default NumberOfTeachers
