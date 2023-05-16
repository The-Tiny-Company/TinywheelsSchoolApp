import React from 'react'
import Logo from '../assets/logo.png'
import { ArrowRight } from 'react-bootstrap-icons'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'

function Leases() {
  const [conventions,setConvenions]=useState([])
  const [agencies,setAgencies] = useState([])
  const loadData=async()=>{
    const res = await axios.get("http://127.0.0.1:8080/api/v1/convention")
    setConvenions(res.data)
    console.log(res.data);
  }

  const loadAgency=async()=>{
    const res = await axios.get("http://127.0.0.1:8080/api/v1/agency")
    setAgencies(res.data)
    console.log(res.data);
  }

  useEffect(()=>{
    loadData();
    loadAgency();
  },[])

  return (
    <div className='Leases'>
      <div class="orders">
                <div class="static">
                    <div class="orders__title">
                        Current Conventions : 
                    </div>
    
                    <div class="orders__search">
                        <input type="text" placeholder="Search" />
                        <div class="orders__filter">
                            <i class="bi bi-filter"></i>
                            Filters
                        </div>
                    </div>
                </div>

                <div class="convetion__all">
                  {conventions.map((convention)=>{
                    return(
                      <div className="convention">
                      <div className="top__content">
                        <div className="agency__image">
                        <img src={require(`../assets/${convention.agency.img}`)} alt="" />
                      </div>
                      <div className="agency__name">
                        {convention.agency.name}
                      </div>
                      <div className="convention__timer">
                        {convention.date}
                      </div>
                      </div>
                      <div className="show_more">
                        Show More <ArrowRight />
                      </div>
                    </div>
                    )
                  })}
                  </div>
        </div>
        <div className="convention__vehicules">
          <form>
            <input type="date"/>
            <select value="Pick Your Agency">
                {agencies.map((agency)=>{
                  return(
                    <option value={agency.id}>{agency.name}</option>
                  )
                })}
            </select>
          </form>
        </div>

    </div>
  )
}

export default Leases
