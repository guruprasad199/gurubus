import React from 'react'
import selfLinkImg from '../img/selfLinkImg.png'

export default function PassangerDetail() {
  return (
    <div style={{padding:'50px'}}>
    <div style={{display:'flex'}}>
      <img src={selfLinkImg} alt="imgs" style={{width:'140px', height:'140px', borderRadius:'50%'}} /> <h4 style={{marginTop:'70px', marginLeft:'25px', fontSize:'23px'}}>Guruprasad sali</h4>
      <img src='https://cdn-icons-png.flaticon.com/512/174/174857.png'  style={{width:'27px', height:'27px', marginTop:'69px', marginLeft:'11px'}}/>
      <span>Full Stack Developer</span>
    </div>
    <p style={{fontSize:'19px'}}>“Algorithm”</p> 
      <p style={{lineHeight:'25px', fontSize:'19px'}}>Word used by programmers when they don’t want to explain what they did</p>
      {/* <p style={{lineHeight:'25px', fontSize:'19px'}}>✅ Your commit that caused a production issue</p> */}



      {/* <p style={{fontSize:'19px'}}>Be a problem solver.</p> */}

    </div>
  )
}


