import React from 'react'
function GuiNotes({text,time,date}) {
  return (
    <div style={{width:'66vw', height:"auto",background:'white',padding:'5px',margin:'20px',borderRadius:'4px'}}>{text}
    <div style={{marginLeft:'52vw',fontWeight:'500',fontSize:'14px'}}><span>{date}</span>  •<span style={{marginLeft:'5px'}}>{time}</span></div></div>
  )
}

export default GuiNotes