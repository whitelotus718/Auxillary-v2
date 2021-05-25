import React, { useState, useEffect } from "react";
import { useParams, Link} from "react-router-dom";
import EventCard from "./home/EventCard"
import "./User.css"

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

    //   const myEventComponents = user.events.map((event) => {

    //     return (
    //         <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>                    
    //             <EventCard key={event.id}
    //             title={event.title}
    //             eventType={event.eventType}
    //             venueType={event.venueType}
    //             venuePhoto={event.venuePhoto}
    //             musicType={event.musicType}
    //             address={event.address}
    //             size={event.size}
    //             price={event.price}
    //             description={event.description}
    //         />
    //         </Link>
    //     );
    // });


  return (
    <div className="outer-container">
      <ul className="user-container">
        <li className="user-profile-pic">
          <h3><strong>{user.username}</strong></h3><img src={user.profile_photo}/>
        </li>
        <li>
        </li>
      </ul>
    </div>
  );
}
export default User;

      // <li>
      //   <strong>User Id</strong> {userId}
      // </li>
      // <li>
      //   <strong>Username</strong> {user.username}
      // </li>
      // <li>
      //   <strong>Email</strong> {user.email}
      // </li>