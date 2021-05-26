import React, { useEffect, useState } from "react";
import { NavLink, useParams, Link, useHistory} from "react-router-dom";
import {updateBid} from './store/bid'
import { useDispatch } from 'react-redux'

function BidReviewPage ({bid}) {
  // const dispatch = useDispatch()
  const { id } = useParams()
  const [event, setEvent] = useState({})

  useEffect(()=> {
    fetch(`/api/events/${id}`)
    .then(response => response.json())
    .then(data => setEvent(data.event));
  }, [])

  const bids = event.bids
  console.log(bids)


  const allBids = bids && bids.map((bid) => {

    function handleClick() {
      const bidid = bid.id
      console.log(bidid)
      // dispatch(updateBid(bidid))
    }

    return (
      <>
        {bid.artist && <h1>{bid.artist.artist_name}</h1>}
        <h1>{bid.isAccepted + ""}</h1>
        <h1><button type="button" onClick={handleClick}>Accept Bid</button></h1>
        <h1>___________</h1>
      </>
    );
  });
  
  return (
    // <Link to={`/bids/${bid.id}`} style={{ textDecoration: 'none' }}>                    
      // <img src={bid.artist.profile_photo} className="event-card-bids-strip"></img>
    // </Link>
    <>
      <h1>Bid Review</h1>
      {allBids}
    </>
    )
}

export default BidReviewPage;

