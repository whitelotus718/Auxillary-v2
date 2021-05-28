import React, { useEffect, useState } from "react";
import { NavLink, useHistory, Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import "./EventCard2.css"
import Button from '@material-ui/core/Button'

function EventCard2({
  event,
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
  const id = event.id

  function reviewBids (e) {
    // e.preventdefault()
    history.push(`/events/${id}/bid-review`)
  }

  console.log(bids)
  return (
      <div className='searchResult'>
          <img src={venuePhoto} alt="" />

          <div className='searchResult__info'>
              <div className="searchResult__infoTop">
                  <h3>{title}</h3>
                  {/* <p>{address}</p> */}
                  {/* <p>{eventType}</p> */}
                  <p>{musicType} ♫</p>
                  <p>{size} guests</p>
                  {/* <p>____</p> */}
                  <div className="bid-central">
                    {bids.map((bid) => BidCard({bid}))}
                  </div>
                  <Button variant="outlined" color="primary" type="button" onClick={reviewBids} className="review-bids-btn">Review Bids</Button>
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

function BidCard ({bid}) {

  return (
    // <Link to={`/bids/${bid.id}`} style={{ textDecoration: 'none' }}>                    
      <img src={bid.artist.profile_photo} className="event-card-bids-strip"></img>
    // </Link>
  )
}

export default EventCard2;
