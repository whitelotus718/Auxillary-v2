import React, { useEffect, useState } from "react";
import { NavLink, useHistory, Link} from "react-router-dom";
import Dashboard from "./Dashboard";
import EventPage from "../events/EventPage"
import {useDispatch, useSelector} from 'react-redux';
import {getEvents} from '../../store/event';
import EventCard from "./EventCard"
import Button from '@material-ui/core/Button'
import {Select, MenuItem} from '@material-ui/core/'
import './HomePage.css'
import {createAccepted} from '../../store/accepted'


function HomeContainer () {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getEvents())
  }, [dispatch])

  return (
    <HomePage />
  )
}

function HomePage() {
  let history = useHistory();
  const dispatch = useDispatch();

  const [users, setUsers] = useState()
  const [event, setEvent] = useState(null);

  const [priceAscending, setPriceAscending] = useState(null)
  const [sizeAscending, setSizeAscending] = useState(null)
  const [genre, setGenre] = useState("")

  let events = useSelector(state => Object.values(state.events))
  console.log(events)



  // events.map((event) => {dispatch(createAccepted(event.id))})

  const user = useSelector(state => {
    return state.session.user
  })

  // filters for event attributes: Size, Price, Event Type
  if (priceAscending === true) {
    // setSizeAscending(null)
    events = events.sort((a,b) => {
      return a.price - b.price;
    });  
  } else if (priceAscending === false){
    // setSizeAscending(null)
    events = events.sort((a,b) => {
      return b.price - a.price;
    });  
  }

  if (sizeAscending === true) {
    // setPriceAscending(null)
    events = events.sort((a,b) => {
      return a.size - b.size;
    });  
  } else if (sizeAscending === false){
    // setPriceAscending(null)
    events = events.sort((a,b) => {
      return b.size - a.size;
    });  
  }  

  if (genre != "") {
    events = events.filter(event => event.musicType === genre)
  }  

  const handleChangeGenre = (e) => {
    e.preventDefault()
    setGenre(e.target.value)
    // filteredGenre()
  }

  const handleChangePrice = (e) => {
    e.preventDefault()
    if (e.target.value === "ascending-p") {
      setSizeAscending(null)
      setPriceAscending(true)
    } else {
      setSizeAscending(null)
      setPriceAscending(false)
    }
    // orderedPrice()
  }

  const handleChangeSize = (e) => {
    e.preventDefault()
    if (e.target.value === "ascending") {
      setPriceAscending(null)
      setSizeAscending(true)
    } else {
      setPriceAscending(null)
      setSizeAscending(false)
    }
    // orderedSize()
  }

  const handleReset = (e) => {
    e.preventDefault()
    setPriceAscending(null)
    setSizeAscending(null)
    setGenre("")
  }

    const eventComponents = events && events.length > 0 && events.map((event) => {
      function handleClick(e) {
        e.preventDefault();
        setEvent(event);
        history.push(`/events/${event.id}`);
      }; 

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
              bids={event.bids}
          />
          </Link>
      );
    }); 

  return (
    <>
      <div className="home-ox-dj">
        <img className="zhu-front-page" src="https://i.ibb.co/dgSBVnn/Zhu-blue-dune-tour.jpg"></img>
      </div>
      <h1 className="home-page-header">Upcoming Events</h1>
      <div className="upcoming-events-toolbar">
          {!user.artist_name && <div className="host-event-btn">
            <Button variant="contained" color="primary" onClick={(e) => {history.push('/event-form')}}>Host Your Own Event</Button>
          </div>
          }
          <div className="event-filters">
            <Select name="price" id="price" value="" displayEmpty onChange={handleChangePrice}>
              <MenuItem value="" disabled>Price</MenuItem>
                <MenuItem value="ascending-p">Ascending</MenuItem>
                <MenuItem value="descending-p">Descending</MenuItem>
            </Select>
            <Select name="size" id="size" value="" displayEmpty onChange={handleChangeSize}>
              <MenuItem value="" disabled>Size</MenuItem>
                  <MenuItem value="ascending">Ascending</MenuItem>
                  <MenuItem value="descending">Descending</MenuItem>
            </Select>
            <Select name="genre" id="genre" value="" displayEmpty onChange={handleChangeGenre}>
              <MenuItem value="" disabled>Genre</MenuItem>
                  <MenuItem value="Electronic">Electronic</MenuItem>
                  <MenuItem value="House">House</MenuItem>
                  <MenuItem value="Top 100">Top 100</MenuItem>
                  <MenuItem value="Ambient">Ambient</MenuItem>
            </Select>
            <Button id="reset" variant="contained" color="" onClick={handleReset}>
              Reset
            </Button>
          </div>

      </div>
      <div className="event-card-container">
        {eventComponents}
      </div>
    </>
  );
}

// export default HomePage;
export default HomeContainer;


