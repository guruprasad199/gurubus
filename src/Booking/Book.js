import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import bus from "../img/gurubus.jpg";
import Travels from "../TravelsDetails/Travels";
import "./style.css";

export default function Book() {
  const [cityData, setCityData] = useState({
    from: "",
    to: "",
    date: "",
  });
  const [data, setData] = useState({})
  const navigate = useNavigate();
  const redirect = () => {
    navigate("/");
  };

  const handleSubmit = () => {
    setData(cityData)
  }
  return (
    <div>
      <button className="button-24" onClick={() => redirect()}>
        Back
      </button>
      <div className="inputWrap">
        <input
          className="inputfeild"
          type="text"
          placeHolder="From..."
          onChange={(e) => setCityData({ from: e.target.value })}
        />
        <input
          className="inputfeild"
          type="text"
          placeHolder="To..."
          onChange={(e) => setCityData({ ...cityData, to: e.target.value })}
        />
        <input
          className="inputfeild"
          type="date"
          onChange={(e) => setCityData({ ...cityData, date: e.target.value })}
        />
        <button className="inputSubmit" onClick={handleSubmit}>Search</button>
      </div>
       {Object.keys(data).length !== 0 &&  <Travels data={data} /> }   
    </div>
  );
}
