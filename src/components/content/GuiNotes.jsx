import React from 'react'
// import GetTime from '../../helper functions/GetTime'
// import GetDate from '../../helper functions/GetDate'
function GuiNotes({text,time,date}) {
    // const time = GetTime()
    // const date = GetDate()
  return (
    <div style={{width:'64.5vw', height:"auto",background:'white',padding:'10px',margin:'20px',borderRadius:'4px'}}>{text}
    <div style={{marginLeft:'52vw',fontWeight:'500',fontSize:'14px'}}><span>{date}</span>  •<span style={{marginLeft:'5px'}}>{time}</span></div></div>
  )
}

export default GuiNotes