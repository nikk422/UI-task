import React from 'react'
import "./home.css";
import { MdOutlineSettings } from "react-icons/md";
import { IoCloseOutline } from "react-icons/io5";
import Orderdetail from '../Componants/Order-detail/Order-detail';



const Home = () => {
  return (
    <div className="home-container">
    <div className="section-1">
        <p className="order-btn-home">Orders <span className="close-icon"><IoCloseOutline/></span></p>
        <p className="close-icon"><MdOutlineSettings/></p>
    </div>
    <div className="section-2">
        <p className="active-title">Pending</p>
        <p>Accepted</p>
        <p>AWB Created</p>
        <p>Ready to Ship</p>
        <p>Shipped</p>
        <p>Completed</p>
        <p>Cancelled</p>
    </div>
      <div>
          <Orderdetail/>
      </div>
    </div>
  )
}

export default Home
