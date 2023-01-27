import React from 'react'
import { useNavigate } from 'react-router-dom';
import bus from "../img/gurubus.jpg";
import "./style.css";

export default function Home() {
   const navigate = useNavigate()
   
   const redirect = () => {
    navigate('/easybook');
   }
  return (
    <div
    style={{
    //   backgroundImage: `url(${bus})`,
      height: "920px",
      width: "100%",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
    }}
  >
      <h1 className='h1'>Guruprasad Bus Service</h1>
    <div className='wrapp'>
    <button className='button-88'>Register with us</button>
    <button className='button-77' onClick={() => redirect()}>Easy Booking</button>
    </div>
  </div>

  )
}
