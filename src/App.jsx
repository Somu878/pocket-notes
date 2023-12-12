import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import { Routes, Route, Link } from "react-router-dom";
import ContentPage from './pages/contentPage';
function App() {

  return (
    <>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path='/content/:grpName' element={<ContentPage/>}/>
   </Routes>
    </>
  )
}

export default App
