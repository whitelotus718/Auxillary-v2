import React, { useEffect, useState } from "react";
import { NavLink, useHistory, Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import "./EventCard.css"

function EventCard({
  title,
  eventType,
  venueType,
  venuePhoto,
  musicType,
  address,
  size,
  price,
  description,
  bids
}) {

  const history = useHistory();

  return (
      <div className='searchResult'>
          <img src={venuePhoto} alt="" />

          <div className='searchResult__info'>
              <div className="searchResult__infoTop">
                  <h3>{title}</h3>
                  <p>{address}</p>
                  <p>{eventType}</p>
                  <p>{musicType} ♫</p>
                  <p>____</p>
                  <p> </p>
                  <h4>{size} guests</h4>
              </div>

              <div className="searchResult__infoBottom">
                  <div className="searchResult__stars">
                      <p>
                          <strong></strong>
                      </p>
                  </div>
                  <div className='searchResults__price'>
                      <h2>${price}</h2>
                      {/* <p>{size} guests</p> */}
                  </div>
              </div>
          </div>
      </div>
  )
}

export default EventCard;
