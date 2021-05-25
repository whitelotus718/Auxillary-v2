import './Dashboard.css'
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Dashboard({events}) {

  
  return (
    <>
      <h1>Dashboard</h1>
      <h2>All Events</h2>
      {/* {events.map((event) => {
        return <Event event={event}/>
      })} */}
    </>
  );
}

function Event({event}) {
  return (
    <div>
      {event.ownerId}
      <div>
        {event.bids.map((bid) => (
          <div>{bid.id}</div>
        ))}
      </ div>
    </ div>
  )
}

export default Dashboard;
