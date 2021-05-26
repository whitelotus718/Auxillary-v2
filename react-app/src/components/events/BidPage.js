import './BidPage.css'
import React, { useEffect, useState } from "react";
import { NavLink, useParams, Link, useHistory} from "react-router-dom";
import {updateBid} from '../../store/bid';
import { useDispatch, useSelector } from 'react-redux'


function BidPage() {
  const dispatch = useDispatch()
  // const history = useHistory()

  const [bid, setBid] = useState({})
  const {bidid} = useParams()
  console.log(bidid)
  console.log(bid)

  useEffect(()=> {
    fetch(`/api/bids/${bidid}`)
    .then(response => response.json())
    .then(data => setBid(data.bid));
  }, [])

  function handleAccept () {
    // dispatch(updateBid(bid))
    // history.push(`/events/${eventId}/bids/${bidId}`)
  }
  
  // function handleCancel () {

  // }

  return (
    <>
      <h1>Bid Page</h1>
      <p>{bid.id}</p>
      {bid.artist && <img id="bid-page-bidder-photo" src={bid.artist.profile_photo}></img>}
      {/* <button onClick={handleAccept}>Accept Bid</button>
      <button onClick={handleCancel}>Cancel Bid</button> */}
    </>
  )
}

export default BidPage;
