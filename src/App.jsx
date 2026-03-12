 import React from 'react'
import Cryptodata from './Component/Cryptodata'
import Header from './Component/Header'
import DisplayCrypto from './Component/DisplayCrypto'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Viewmore from './Component/Viewmore'
import Errorboundry from './Component/Errorboundry'
import Adduser from './Component/Adduser'
import Displayuser from './Component/Displayuser'
 
 const App = () => {
   return (
     
     <BrowserRouter>
       
      <Cryptodata>
       
      <Header/>
       <Routes>
       <Route path='/'element={<Errorboundry> <DisplayCrypto/></Errorboundry>}/>
       {/* <Route path='/'element={<DisplayCrypto/>}/> */}
        <Route path='/coin/:id'element={<Viewmore/>}/>
        <Route path='/adduser' element={<Adduser/>}/>
        <Route path='/profile' element={<Displayuser/>}/>
       </Routes>
      </Cryptodata>
     </BrowserRouter>
    // <Contextu>

    //   <User/>
    // </Contextu>
   )
 }
 
 export default App