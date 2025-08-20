import React, { useState } from 'react'
import styles from "./adduser.module.css"
import axios from 'axios'
import {v4 as uuidv4} from "uuid" 
const Adduser = () => {
    let [flag,setflag]=useState(true)
    let[name,setName]=useState(" ")
    let [email,setemail]=useState(" ")
    let getName=(e)=>{
        setName(e.target.value);
        setflag(false)
    }
    let getemail=(e)=>{
        setemail(e.target.value);
        setflag(false)
    }
    let form=(e)=>{
        axios.post("http://localhost:4000/users" ,{id:uuidv4(),name,desc} )
        console.log(form)
    }
  return (
    <div id={styles.displaycnt}>
        <form action="" onSubmit={form}>
            <label htmlFor="username">User Name</label>
            <input type="text" id='username'  onChange={getName}/>
            <lable htmlFor="email">Email</lable>
            <input name="" id="email" onChange={getemail}></input>
              <button disabled={flag?true:false} style={{cursor:flag?"not-allowed":"pointer", backgroundColor:flag?"gray":"green"}}>Submit</button> 
            </form>  </div>
  )
}

export default Adduser