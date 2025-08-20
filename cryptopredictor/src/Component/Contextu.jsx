 import React, { createContext } from 'react'
 export let userdata=createContext
 const Contextu = ({children}) => {
   return (
    <Contextu.Provider value={'abc'}>
    {children}

</Contextu.Provider>
   )
 }
 
 export default Contextu