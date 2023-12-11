import React from 'react'
import GetTime from '../../helper functions/GetTime'
import GetDate from '../../helper functions/GetDate'
function GuiNotes() {
    const time = GetTime()
    const date = GetDate()
  return (
    <div style={{width:'65vw', height:"auto",background:'white',padding:'10px',margin:'20px',borderRadius:'4px'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita natus libero eaque minus necessitatibus atque ipsa sequi, ab quae vitae! <span>{date}</span> <span>{time}</span></div>
  )
}

export default GuiNotes