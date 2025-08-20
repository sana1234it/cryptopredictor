import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Displayuser = () => {
  let [user,setUser]=useState([])
  let navigate= useNavigate()
  useEffect((e)=>{
    axios.get("http://localhost:4000/users").then((e)=>{
    setUser(e.data)  
    })
  },[])
   let Userdetails=(id)=>{
    navigate('/displayuser/${id')
   }
  return (
    <div>
      <table className='cryptoTable'>
        <thead>
          <tr>
            <th>ID</th>
            <th>User Name</th>
            <th>Email</th>
           
          </tr>
        </thead>
        <tbody>
          {
            user.map((e,i)=>{
              return(
                <tr key={i}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.email}</td>
                 
                  
                </tr>
              )
            })
          }
        </tbody>
        </table> 
        
    </div>
  )
}

export default Displayuser