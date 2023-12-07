import React from 'react'
import Notelist from '../components/noteslist/Notelist'
import Banner from '../components/banner/Banner'

function Home() {
  return (
    <div style={{display:'flex'}}>
    <Notelist/>
    <div>
        <Banner/>
    </div>
    </div>
  )
}

export default Home