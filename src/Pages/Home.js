import axios from 'axios'
import React, { useContext ,useEffect,useState} from "react";
import { Usercontext } from "../Context/Usercontext";

function Home() {
    const {data,setData}=useContext(Usercontext);
  return (
    <div>Home
        <h1>Hii</h1>
        <ul>
        {data.map((d) => (
          <li key={d.hotel_Name}>{d.hotel_Name}</li>
        ))}
      </ul>
    </div>
  )
}

export default Home