import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import EditSubscription from './pages/editSubscription/EditSubscription';
const Router = () => {
  return (
    
       
    <Routes>
            <Route path="/" element={<Home/>}/>   
           <Route path='/editsubscript' element={<EditSubscription/>}></Route>
    </Routes>
            
       
   
  )
}

export default Router