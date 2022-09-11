import React from 'react'
import "./sidebar.css";
import { AiFillDashboard,AiOutlineTag , AiOutlineShareAlt } from "react-icons/ai";
import { MdOutlineLocalShipping } from "react-icons/md";
import { FaFirstOrder } from "react-icons/fa";


const Sidebar = () => {

    const sidebarDetails= [
        {
            name:"Dashboard",
            icon:<AiFillDashboard/>

        },
        {
            name:"inventory",
            icon:<AiOutlineTag/>
            
        },
        {
            name:"Orders",
            icon:<FaFirstOrder/>
            
        },
        {
            name:"Shipping",
            icon:<MdOutlineLocalShipping/>
            
        },
        {
            name:"Channel",
            icon:<AiOutlineShareAlt/>
            
        }
    ]

  return (
    <div className="sidebar-container">
    <aside className="lib-sidebar">
      <ul className="icon-list">
        {sidebarDetails.map(({ name, icon }) => (
            <li className="hoverText">
              <i className="sidebar-icon">{icon}</i>
              <span>{name}</span>
            </li>
        ))}
      </ul>
    </aside>
  </div>
  )
}

export default Sidebar
