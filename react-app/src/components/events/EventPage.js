import React, { useEffect, useState } from "react";
import { NavLink, useParams, Link, useHistory} from "react-router-dom";
import './EventPage.css'
import Button from '@material-ui/core/Button'
import {getEvents, deleteEvent} from "../../store/event"
import {getBids, createBid} from "../../store/bid"
import { refreshUser } from '../../store/session';
// import { removeEvent } from '../../store/event';

import { useDispatch, useSelector } from 'react-redux'


function EventPage() {
  const { id } = useParams()
  const [event, setEvent] = useState({})
  const [users, setUsers] = useState([])
  // const [bids, setBids] = useState([])

  // const [eventId, setEventId] = useState(id)

  const [bidOwnerIds, setBidOwnerIds] = useState([])
  const [usersWithBids, setUsersWithBids] = useState([])

  // show state - to show or hide "Event Info - default is hidden"
  const [showInfo, setShowInfo] = useState(false);


  const dispatch = useDispatch()
  const history = useHistory()

  // always nice to have user handy - can implement if user.id matches any of the bid.ownerId, then user can delete a bid by clicking on an "X"
  const user = useSelector(state => {
    return state.session.user
  })

  useEffect(() => {
    dispatch(getBids(id))
  }, [dispatch])

  const bids = useSelector(state => Object.values(state.bids))
  // let bids = event.bids

  // set Event
  useEffect(()=> {
    fetch(`/api/events/${id}`)
    .then(response => response.json())
    .then(data => setEvent(data.event));

  }, [])


  // set Users
  useEffect(()=> {
    fetch(`/api/events/${id}`)
    .then(response => response.json())
    .then(data => setUsers(data.users))
  }, [])


  // set Bids
  // useEffect(()=> {
  //   fetch(`/api/events/${id}`)
  //   .then(response => response.json())
  //   .then(data => setBids(data.bids))
  // }, [])


  // function bidderSetter(bids) {
  //   bids.forEach((bid) => {
  //     bidOwnerIds.push(bid.ownerId)
  //   })

  //   bidOwnerIds.forEach((id) => {
  //     users.forEach((user) => {
  //       if (user.id === id) {
  //         usersWithBids.push(user)
  //       }
  //     })
  //   })  

  // }
  // bidderSetter(bids)

  console.log(bids, "BIDS!!!!!!", 4)

  const artistsWhoBid = []
  bids.forEach((bid) => {
    users.forEach((user) => {
      if (bid.ownerId === user.id) {
        artistsWhoBid.push(user)
      }
    })
  })

  console.log(bidOwnerIds, "BID OWNER IDS!!!!!!")
  console.log(usersWithBids, "USERS WITH BIDS!!!!!!")

  const onBid = async (e) => {
    e.preventDefault()
    dispatch(createBid(id))
    dispatch(getBids(id))
  }


  
  console.log(event)
  console.log(bids)
  console.log(users)







  // const eventDelete = async (e) => {
  //   const res = await fetch(`/api/events/${id}`, {
  //     headers: { "Content-Type": "application/json" },
  //     method: 'DELETE'
  //   })
  //   dispatch(refreshUser(user.id))
  //   dispatch(getEvents())
  //   history.push('/')
  // }

  console.log(event, "EVENT OBJ")
  console.log(event.bids, "EVENT OBJ BIDS")

  const handleClick = (e) => {
    e.preventDefault()
    dispatch(deleteEvent(id))
    history.push('/')
  }

  console.log(artistsWhoBid)
  console.log(bids)

  // return statement
  return event && (
    <div className="event-page-container">

      <div className="event-page-first-section">
        <Button variant="contained" color="secondary" onClick={handleClick}>Delete</Button>
        <h1 className="event-page-title">{event.title}</h1>
        <img className="venue-photo" src={event.venuePhoto}></img>

        {showInfo && 
          <div className="event-info">
            <h4>{event.address}</h4>
            <h4>{event.description}</h4>
            <h4>{event.size} guests</h4>
            <h4>${event.price}</h4>
        </div>
        }
        <div className="show-details-btn-container">
          <Button variant="contained" color="primary" className="show-details-btn" onClick={() => setShowInfo(!showInfo)} >
            {showInfo ? "Hide Details" : "Show Details"}
          </Button>
        </div>
      </div>
      
      <div className="event-page-second-section">
        <span className="event-music-type"><h2>{event.musicType} ♪</h2></span>
        <div className="bids">        
          {/* {usersWithBids.map((bidder) => <p>{bidder.artist_name}</p>)} */}
          {/* {bids.map((bid) => <img className="bids-imgs" src={bidder.profile_photo}></img>)} */}
          {/* {bids.map((bid) => <p>{bid.author.username}</p>)} */}
          {/* {event.bids.map((bid) => <img className="bids-imgs" src={bid.profile_photo}></img>)} */}
          {/* {bids.map((bid) => <p>{bid.id}</p>)} */}
          {/* {artistsWhoBid.map((artist) => <img src={artist.profile_photo} className="bids-imgs"></img>)} */}
          {bids.map((bid) => <img src={bid.artist.profile_photo} className="bids-imgs"></img>)}
          {/* {bids.map((bid) => <p>{bid.artist.username}</p>)} */}
          {/* {bids.map((bid) => {
            debugger
            <img src={bid.user.profile_photo} className="bids-imgs"></img>
          })} */}
          {/* {bids.map((bid) => <p>{bid.author.artist_name}</p>)} */}
          {/* <h1> B r e a k</h1> */}
          {/* {bid} */}
          {/* {user.bids.map((bid) => <p>{bid.ownerId}</p>)} */}
          {/* <h3>{bids[0].id}</h3> */}
          {/* <p>{event.bids[0].isAccepted + ""}</p> */}
        </div>

        <div className="bids-names">        
          {/* {usersWithBids.map((bidder) => <Link to={`/users/${bidder.id}`}><p>{bidder.username}</p></Link>)} */}
          {/* {usersWithBids.map((bidder) => <img className="bids-imgs" src={bidder.profile_photo}></img>)} */}
        </div>

        <form className="bid-btn" onSubmit={onBid}>
          <Button variant="contained" color="primary" type="submit" className="bid-button">B I D</Button>
        </form>
      </div>
    </div>
  );
}

export default EventPage;
