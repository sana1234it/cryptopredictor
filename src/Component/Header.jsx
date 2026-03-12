import React, { useContext } from 'react'
import { ContextObj } from './Cryptodata'
import { Link } from 'react-router-dom'


const Header = () => {
 let {data,currency,setCurrency,setSymbol,coindata,setcoinData}= useContext(ContextObj)
 console.log(currency)
 let getCurrency=(e)=>{
  console.log(e.target.value)
  setCurrency(e.target.value)
  if(e.target.value=="inr"){
    setSymbol("₹")
  }
  else if(e.target.value=="usd"){
    setSymbol("$")
  }
  else if(e.target.value=="eur"){
    setSymbol("€")
  }
 }
  return (
    <div className='header'>
      <div className='left'>
      <img className='ig' src='https://up.yimg.com/ib/th?id=OIP.JARDKdEjBReS2edLOuddbAHaEK&pid=Api&rs=1&c=1&qlt=95&w=203&h=114' alt='' /> 
      <h1><b>  Bit Coin</b></h1>
      </div>
      <div className='right'>
        <Link to='/'> <button>Home</button> </Link>
        <ul>
          <li>
          <select name="" id="" onChange={getCurrency}>
          <option value="usd">USD</option>
          <option value="inr">INR</option>
          <option value="eur">EUR</option>
        </select>
          </li>
        </ul>
         <Link to='adduser'> <button>Login</button> </Link>
         <Link to='profile'> <button>Profile</button> </Link>
      </div>
    </div>
  )
}

export default Header