
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/schoologo.png'
import User from '../assets/user.png'
import {Grid,BusFront,Person,GeoAltFill,PersonVcard,ClockHistory, Wrench} from 'react-bootstrap-icons'


function SideBar() {
    const [selected,setSelected] = useState("Dashboard")


  return (
    <div className='SideBar'>
        <div class="logo">
                <img src={Logo} alt="Logo Picture" />
            </div>
            <div class="SideBar_list">
                <ul>
                    <li className={selected ==="Dashboard" ? "selected" : ""} onClick={()=>{setSelected("Dashboard")}}><Grid /><Link to={"/"}>Dashboard</Link></li>
                    <li className={selected ==="Vehicule" ? "selected" : ""} onClick={()=>{setSelected("Vehicule")}}><BusFront /><Link to={"/vehicule"}>Vehicule</Link></li>
                    <li className={selected ==="Driver" ? "selected" : ""} onClick={()=>{setSelected("Driver")}}><PersonVcard /><Link to={"/driver"}>Driver</Link></li>
                    <li className={selected ==="Client" ? "selected" : ""} onClick={()=>{setSelected("Client")}}><Person /><Link to={"/client"}>Clients</Link></li>
                    <li className={selected ==="ParcAuto" ? "selected" : ""} onClick={()=>{setSelected("ParcAuto")}}><Wrench /><Link to={"/parcauto"}>Parc Auto</Link></li>
                    <li className={selected ==="Trajectory" ? "selected" : ""} onClick={()=>{setSelected("Trajectory")}}><GeoAltFill /><Link to={"/trajectory"}>Ride</Link></li>
                    <li className={selected ==="Leases" ? "selected" : ""} onClick={()=>{setSelected("Leases")}}><ClockHistory /><Link to={"/leases"}>Leases</Link></li>
                    
                </ul>
            </div>

            <div class="user">
                <div class="user_image">
                    <img src={User} alt="User Picture" />    
                </div>
                <div class="user__name">
                    <div class="name">
                        Admin 
                    </div>
                    <div class="logout">
                        Logout
                    </div>
                </div>
            </div>
    </div>
  )
}

export default SideBar
