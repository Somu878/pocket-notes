import React from 'react'
import Notelist from '../components/noteslist/Notelist'
import Banner from '../components/banner/Banner'

function Home() {
  return (
    <div style={{display:'flex'}}>
       <Notelist/>
       <Banner/>
    </div>
  )
}

export default Home