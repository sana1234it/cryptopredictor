import React, { createContext, useEffect, useState } from 'react'
export  let ContextObj= createContext()//data get krne ke liye
const Cryptodata = ({children}) => {
  let [data,setdata]=useState([])
  let [currency,setCurrency]=useState("inr")
  let [symbol,setSymbol]=useState("₹")
  useEffect(()=>{//network call krne k liye
    const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}` ;
const options = {
  method: 'GET',
  headers: {accept: 'application/json', 'x-cg-demo-api-key': 'CG-6CPoCedYaSyVdiPohfwdhF1d'}
};

fetch(url, options)
  .then(res => res.json())
  .then(e => setdata(e))
  .catch(err => console.error(err));
  },[currency])
  return (
    <ContextObj.Provider value={ {data,currency,setCurrency,symbol,setSymbol}}>
        {children}
        </ContextObj.Provider>
  )
}

export default Cryptodata