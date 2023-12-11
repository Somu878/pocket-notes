import React from 'react'
import Notelist from '../components/noteslist/Notelist'
import Banner from '../components/banner/Banner'
import { Routes, Route, Link } from "react-router-dom";
import Content from '../components/content/Content';
function Home() {
  return (
    <div style={{display:'flex'}}>
       <Notelist/>
    <div>
      <Routes>
        <Route path="/" element={<Banner/>} />
        <Route path='/content/:grpId' element={<Content/>}/>
      </Routes>
    </div>
    </div>
  )
}

export default Home