import React from 'react'
import { PersonCheckFill,Cash,CarFrontFill } from 'react-bootstrap-icons'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import BarChart from '../charts/BarChart'
import PieChart from '../charts/PieChart'
import { Link } from 'react-router-dom'
import User from '../assets/user.png'




const statusData = {
  labels : ['Status'],
  datasets:[
    {
      label : 'Ready',
      data : [32],
      backgroundColor : '#F48484',
      borderColor : 'black',
      borderWidth : 1,
    },
    {
      label : 'Not Ready',
      data : [8],
      backgroundColor : '#F7C8E0',
      borderColor : 'black',
      borderWidth : 1,
    },
  ]
}

const statusOptions ={

}

const propData = {
  labels : ['Propriety','Agence Chakib','Agence Massar'],
  datasets:[
    {
      data : [3,6,9],
      backgroundColor : ['red','blue','green'],

    },
  ]
}

const propOptions ={

}


const assignementData = {
  labels : ['Driver Assignement'],
  datasets:[
    {
      label : 'Assigned',
      data : [5],
      backgroundColor : '#F5F3C1',
      borderColor : 'black',
      borderWidth : 1,
    },
    {
      label : 'Not Assigned',
      data : [30],
      backgroundColor : '#27E1C1',
      borderColor : 'black',
      borderWidth : 1,
    },
  ]
}

const assignementOptions ={

}

function Dashboard() {
  const center=[31.634943,-8.0359188]
  
  return (
    <div className='Trajectory'>
      <div className="header">
        <div className="header__title">
            Hi , <span>Admin</span> 
            <br />
            Welcome to your DashBoard
        </div>
      </div>
      <div className="content">
        <div className="content__stats">
          <div className="content__stats__title">Application Stats</div>
          <div className="stats">
            <div className="stat">
              <PersonCheckFill className='stat__icon'/>
              <div className="stat__input">8</div>
              <div className="stat__title">Rides</div>
            </div>
            <div className="stat">
              <PersonCheckFill className='stat__icon'/>
              <div className="stat__input">8</div>
              <div className="stat__title">Drivers</div>
            </div>
            <div className="stat">
              <Cash className='stat__icon'/>
              <div className="stat__input">21</div>
              <div className="stat__title">Users</div>
            </div>
            <div className="stat">
              <CarFrontFill className='stat__icon'/>
              <div className="stat__input">102</div>
              <div className="stat__title">Vehicule</div>
            </div>
          </div>
        </div>

        <div className="charts">
          <div className="charts__title">
            Vehicule
          </div>
          <div className="charts__details">
            <BarChart data={statusData} options={statusOptions} />
            <BarChart data={assignementData} options={assignementOptions} />
            <PieChart data={propData} options={propOptions} />
          </div>
        </div>
        <div className="schoolinfo">
          <div className="schoolinfo__title">
            School Informations
          </div>
          <div className="schoolinfo__content">
          <div className="map">
                <MapContainer center={center} zoom={13} >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                   <Marker position={center}>
                    <Popup>
                      A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                  </Marker>
                  </MapContainer>
                </div>
            <div className="schoolinfo__content__admins">
              <div className="top__content">
                <div className="column">
                  <div className="schoolinfo__label">Name</div>
                  <div className="schoolinfo__name">Ecole Nationale des Sciences Ingenieur</div>
                </div>
               <div className="column">
               <div className="schoolinfo__label">Administrators</div>
                <div className="schoolinfo__name"> <img src={User} alt="" /> Adil Chbaly</div>
                <div className="schoolinfo__name"> <img src={User} alt="" /> Anas Moaya</div>
                <div className="schoolinfo__name"> <img src={User} alt="" /> Anas Mourdi</div>
               </div>
              </div>
              <div className="schoolinfo__label">TinyWheels Subscription</div>
              <div className="schoolinfo__subs">
                <div className="endsin">
                  Ends In 9/5/2023
                  <div className="subslink">
                  <Link className='link' to={'/client'} >Extend</Link>
                  </div>     
                </div>          
              </div>
            </div>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Dashboard
