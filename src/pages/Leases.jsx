import React from 'react'
import Logo from '../assets/logo.png'
import { ArrowRight } from 'react-bootstrap-icons'

function Leases() {
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
                  <div className="convention">
                  <div className="top__content">
                    <div className="agency__image">
                    <img src={Logo} alt="" />
                  </div>
                  <div className="agency__name">
                    Agence Massar
                  </div>
                  <div className="convention__timer">
                    Ends in 09/03/2023
                  </div>
                  </div>
                  <div className="show_more">
                    Show More <ArrowRight />
                  </div>
                </div>
                <div className="convention">
                  <div className="top__content">
                    <div className="agency__image">
                    <img src={Logo} alt="" />
                  </div>
                  <div className="agency__name">
                    Agence Nasser
                  </div>
                  <div className="convention__timer">
                    Ends in 22/06/2023
                  </div>
                  </div>
                  <div className="show_more">
                    Show More <ArrowRight />
                  </div>
                </div>
                  </div>
        </div>
        <div className="convention__vehicules">
          <div className="convention__title">
            Leased Vehicules
          </div>
          <div className="all_vehicules">
            <div className="vehicule">
              <div className="vehicule__content">
              <div className="vehicule__image">
                <img src={Logo} alt="" />
              </div>
              <div className="vehicule__name">
                Merci 10 ;)
              </div>
              <div className="vehicule__details">
                <div className="seatnbr">
                  21
                </div>
                <div className="status">
                  Disponible
                </div>
                <div className="destination">
                  Hay Malika
                </div>
              </div>
              </div>
            </div>
            <div className="vehicule">
              <div className="vehicule__content">
              <div className="vehicule__image">
                <img src={Logo} alt="" />
              </div>
              <div className="vehicule__name">
                Merci 10 ;)
              </div>
              <div className="vehicule__details">
                <div className="seatnbr">
                  21
                </div>
                <div className="status">
                  Disponible
                </div>
                <div className="destination">
                  Hay Malika
                </div>
              </div>
              </div>
            </div>

          </div>
        </div>

    </div>
  )
}

export default Leases
