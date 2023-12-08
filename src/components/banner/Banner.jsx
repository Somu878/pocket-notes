import React from 'react'
import bannerbg from '../../assets/image-removebg-preview 1.png'
function Banner() {
  return (
    <div style={{background:'#DAE5F5',width:'70vw',height:'100vh',marginTop:'-6px',cursor:'default'}}>
      <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center',paddingTop:'150px'}}>
        <img style={{width:'550px',height:'270px'}} src={bannerbg} alt="banner image" />
        <p style={{fontFamily:'var(--roboto)',fontSize:'40px',fontWeight:'bold',marginTop:'-15px'}}>Pocket Notes</p>
        <p style={{fontSize:'15px',fontFamily:'var(--roboto)',fontWeight:'500',width:'550px',textAlign:'center',marginTop:'-20px',letterSpacing:'0.02em'}}>Send and receive messages without keeping your phone online. <br />
Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
      </div>
      <div style={{marginLeft:'30vw',marginTop:'26vh',fontFamily:'var(--roboto)',fontSize:'17px',fontWeight:'400'}}>🔒End-to-end encrypted</div>
    </div>
  )
}

export default Banner