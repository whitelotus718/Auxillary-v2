import React, { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import "./User.css"
import EventCard2 from './home/EventCard2'
import MediaCard from './home/BidCard'

function User() {
  const [user, setUser] = useState({});
  // Notice we use useParams here instead of getting the params
  // From props.
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  console.log(user.bids)
// event center | User can see events he is hosting. User can see bids on eaach event
  const userEvents = user.events && user.events.map((event) => {
    return (
      // <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>                    
            <EventCard2 key={event.id}
                  event={event}
                  title={event.title}
                  eventType={event.eventType}
                  venueType={event.venueType}
                  venuePhoto={event.venuePhoto}
                  musicType={event.musicType}
                  address={event.address}
                  size={event.size}
                  price={event.price}
                  description={event.description}
                  bids={event.bids}
                  />
      // </Link>
    );
  });

  // bid center
  const userBids = user.bids && user.bids.map((bid) => {
    return (
      // <Link to={`/events/${event.id}/bids/${bid.id}`} style={{ textDecoration: 'none' }}>                    
      <div className="event-card">
        <MediaCard key={bid.id}
                  bid={bid}
        />
      </div>
      // </Link>
    );
  });


  return (
    <div className="outer-container">
      <ul className="user-container">
        <li className="user-profile-pic">
          <h1 className="user-headline"><strong>{user.username}</strong></h1><img src={user.profile_photo}/>
        </li>
      </ul>
        {!user.artist_name && <div className="user-events-container">
          <h1>My Events</h1>
          {userEvents}
        </div>}
        {user.artist_name && <div className="user-bids-container">
          <h1>My Bids</h1>
          {userBids}
        </div>}
    </div>
  );
}
export default User;



