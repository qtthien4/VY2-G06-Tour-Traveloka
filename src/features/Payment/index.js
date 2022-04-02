import React from "react";
import VerticalTabs from './tabPayment';
import Navbar from './navbar';
import Info from './Info';
import './css/container.css'

export default function Paymemt() {
  return (
    <div>
        <Navbar/>
        <div style={{"background-color" : "#f2f3f3"}}>
          <div className='container'>
        <VerticalTabs/>
        <Info/>
        </div>
        </div>
        
    </div>
  );
}
