import React from 'react'
import "./style.css";
import travelData from '../travelData.json'
import { useNavigate } from 'react-router-dom';

export default function Travels({data}) {
  const navigate = useNavigate()
  const redirect = () => {
    navigate('/detail');
  }
  return (
    <div>
        {data.from.length != 0 && travelData?.map((item) => (
        <div className='cards'>
        <div className='details'>
        <p style={{minWidth:'150px'}}>{item.name}</p>
        <p>Time {item.time}</p>
        <p>{data.from}</p>
        <p>To</p>
        <p>{data.to}</p>
        <p>Price {item.price}</p>
        <button className='bookButton' onClick={redirect()}>Book Now</button>
        </div>
       </div>
        ))}
    </div>
  )
}
