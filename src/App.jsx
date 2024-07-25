import React from "react";
import { useState } from 'react'
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CommunityHomePage from "./Pages/CommunityHomePage";

const App = () =>  {


  return (
    <BrowserRouter>
     
        <Routes>
          <Route path="/" element={<CommunityHomePage />} />
         
        </Routes>
     
    </BrowserRouter>
  )
}

export default App
