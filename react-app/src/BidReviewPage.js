import React, { useEffect, useState } from "react";
import { NavLink, useParams, Link, useHistory} from "react-router-dom";
import {updateBid} from './store/bid'
import { useDispatch } from 'react-redux'

function BidReviewPage () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [event, setEvent] = useState({})

  const history = useHistory();
  const [accepted, setAccepted] = useState(false)

  useEffect(()=> {
    fetch(`/api/events/${id}`)
    .then(response => response.json())
    .then(data => setEvent(data.event));
  }, [accepted])

  const bids = event.bids
  console.log(bids)

  
  const allBids = bids && bids.map((bid) => {

    function handleClick() {
      const bidid = bid.id
      console.log(bidid)
      dispatch(updateBid(bidid))
      setAccepted(!accepted)
      // history.push(`/events/${id}/bid-review`)
    }
    
    // pseudocode
    // if all the bids are 

    return (
      <>
        {bid.artist && <h1>{bid.artist.artist_name}</h1>}
        {/* <img src={}></img> */}
        <h1>{bid.isAccepted + ""}</h1>

      {!accepted && <h1><button type="button" onClick={handleClick}>Accept Bid</button></h1>}

      {accepted && bid.isAccepted && <h1><button type="button" onClick={handleClick}>Decline Bid</button></h1>}
      {accepted && !bid.isAccepted && <h1><button type="button" disabled onClick={handleClick}>Decline Bid</button></h1>}
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

