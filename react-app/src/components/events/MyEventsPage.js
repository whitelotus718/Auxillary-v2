import "./MyEventsPage.css"
import React, { useEffect, useState } from "react";
import { NavLink, useParams, Link} from "react-router-dom";
import {useDispatch, useSelector} from 'react-redux';
import EventCard from "../home/EventCard"

function MyEventsPage({}) {
  const dispatch = useDispatch()
  const user = useSelector(state => state.session.user);
  console.log(user)


    const myEventsComponent = user.events.map((event) => {
      // function handleClick(e) {
      //   e.preventDefault();
      //   setEvent(event);
      //   history.push(`/events/${event.id}`);
      // };

    return (
        <Link to={`/events/${event.id}`} style={{ textDecoration: 'none' }}>                    
            <EventCard key={event.id}
            title={event.title}
            eventType={event.eventType}
            venueType={event.venueType}
            venuePhoto={event.venuePhoto}
            musicType={event.musicType}
            address={event.address}
            size={event.size}
            price={event.price}
            description={event.description}
        />
        </Link>
    );
  });



  return (
    <> 
      <h1>My Events Page</h1>
      <div>
        {myEventsComponent}
      </div>
    </>
  );
}

export default MyEventsPage;