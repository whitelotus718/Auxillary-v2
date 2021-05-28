import React, { useEffect, useState } from "react";
import { NavLink, useParams, Link, useHistory} from "react-router-dom";
import {updateBid} from './store/bid'
import {updateAccepted} from './store/accepted'
import {createAccepted} from './store/accepted'
import { useDispatch, useSelector } from 'react-redux'
import './BidReviewPage.css'
import MediaCard from './components/home/BidCard'

function BidReviewPage () {
  const dispatch = useDispatch()
  const { id } = useParams()
  const [event, setEvent] = useState({})

  const history = useHistory();
  // const [accepted2, setAccepted2] = useState(false)


  // let accepted = useSelector(state => {
  //   return state.accepted
  // })
  // const yep = useSelector(state => state.accepted);
  // console.log(id)
  // console.log(accepted[id])

  let [accepted, setAccepted] = useState(false)

  useEffect(()=> {
    fetch(`/api/events/${id}`)
    .then(response => response.json())
    .then(data => setEvent(data.event));
  }, [accepted])

  const bids = event.bids
  console.log(bids)



  {bids && bids.map((bid) => {
    if (bid.isAccepted === true) {
      accepted = true
    }
  })}


  


  
  const allBids = bids && bids.map((bid) => {

    function handleClick() {
      const bidid = bid.id
      console.log(bidid)
      setAccepted(!accepted)
      // if (accepted != undefined) {
      //   accepted = !accepted
      // }
      dispatch(updateBid(bidid))
      dispatch(updateAccepted(id))
      // accepted[id] = !accepted[id] 
      // history.push(`/events/${id}/bid-review`)
    }
    
    // pseudocode
    // if all the bids are 

    return (
      <>
        {bid.artist && <h1 className="bid-review-artist-name">{bid.artist.artist_name}</h1>}
        <h1><img className="bid-review-artist-pic" src={bid.artist.profile_photo}></img></h1>
        <h1>{bid.isAccepted + ""}</h1>

      {!accepted && <h1><button type="button" onClick={handleClick}>Accept Bid</button></h1>}

      {accepted && bid.isAccepted && <h1><button type="button" onClick={handleClick}>Decline Bid</button></h1>}
      {accepted && !bid.isAccepted && <h1><button type="button" disabled onClick={handleClick}>Decline Bid</button></h1>}
        <h1>___________</h1>
      </>
    );
  });
  
  return (
    <>
      <Link to={`/events/${id}/`} style={{ textDecoration: 'none' }}>     
          <img className="bid-review-event-img" src={event.venuePhoto}></img>
        </Link>
        <h1 className="bid-review-h1" >Bid Review</h1>
        {allBids}
    </>
      
    )
}

export default BidReviewPage;

