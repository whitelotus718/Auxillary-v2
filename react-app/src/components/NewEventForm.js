import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// import { createEvent } from './store/events';
import {createEvent} from '../store/event';
import './NewEventForm.css'


const CreateEventForm = () => {
   
    const dispatch = useDispatch();
    const history = useHistory();
    const [title, setTitle] = useState('');
    const [eventType, setEventType] = useState("");
    const [venueType, setVenueType] = useState('');
    const [venuePhoto, setVenuePhoto] = useState('');
    const [musicType, setMusicType] = useState('');
    const [address, setAddress] = useState('');
    const [size, setSize] = useState(50);
    const [price, setPrice] = useState(100);
    const [description, setDescription] = useState('');
    const [ownerId, setOwnerId] = useState(1);

    const updateTitle = (e) => setTitle(e.target.value);
    const updateEventType = (e) => setEventType(e.target.value);
    const updateVenueType = (e) => setVenueType(e.target.value);
    const updateVenuePhoto = (e) => setVenuePhoto(e.target.value);
    const updateMusicType = (e) => setMusicType(e.target.value);
    const updateAddress = (e) => setAddress(e.target.value);
    const updateSize = (e) => setSize(e.target.value);
    const updatePrice = (e) => setPrice(e.target.value);
    const updateDescription = (e) => setDescription(e.target.value);
    // const updateUserId = (e) => setUserId(e.target.value);
    
    // const addEvent = async (title, eventType, venueType, venuePhoto, musicType, address, size, price, description) => {
    //   const response = await fetch("/api/events/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       ownerId,
    //       title,
    //       eventType,
    //       venueType,
    //       venuePhoto,
    //       musicType,
    //       address,
    //       size,
    //       price,
    //       description
    //     }),
    //   });
    //   const event = await response.json();
    //   return event
    // }

  
    const handleSubmit = async (e) => {
      e.preventDefault();
      
    //   const payload = {
    //     eventType,
    //     venueType,
    //     musicType,
    //     title,
    //     address,
    //     size,
    //     price,
    //     description,
    //     venuePhoto,
    // };
      // const event = await addEvent(title,eventType,venueType,venuePhoto,musicType,address,size,price,description)
      await dispatch(createEvent(title,eventType,venueType,venuePhoto,musicType,address,size,price,description))
      // const event = await addEvent(payload)
      // if (!event.errors) {
      //   setAuthenticated(true);
      // }
      history.push("/")
    };
  
    const handleCancelClick = (e) => {
      e.preventDefault();
      history.push('/')
    };
  
    return (
      <section className="new-form-holder">
        <div className="wrapper">

          <div className="title">
            <h1> Host an Event </h1>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="contact-form">
              <div className="input-fields">
                <input
                  className="input"
                  type="text"
                  placeholder="Event Type"
                  required
                  value={eventType}
                  onChange={updateEventType} />
                <input
                  className="input"
                  type="text"
                  placeholder="Venue Type"
                  required
                  value={venueType}
                  onChange={updateVenueType} />
                <input
                  className="input"
                  type="text"
                  placeholder="Music Type"
                  required
                  value={musicType}
                  onChange={updateMusicType} />
                <input
                  className="input"
                  type="text"
                  placeholder="Title"
                  required
                  value={title}
                  onChange={updateTitle} />
                <input
                  className="input"
                  type="text"
                  placeholder="Address"
                  required
                  value={address}
                  onChange={updateAddress} />
                <input
                  className="input"
                  type="number"
                  placeholder="Party Size"
                  min="0"
                  max="500"
                  required
                  value={size}
                  onChange={updateSize} />
                <input
                  className="input"
                  type="number"
                  placeholder="Price"
                  min="0"
                  max="9999"
                  required
                  value={price}
                  onChange={updatePrice} />
                <input
                  className="input"
                  type="text"
                  placeholder="Venue Photo"
                  required
                  value={venuePhoto}
                  onChange={updateVenuePhoto} />
              </div>
              <div className="msg">
                <textarea
                  type="text"
                  placeholder="Description"
                  required
                  value={description}
                  onChange={updateDescription} />
                <div className="btn"><button type="submit">Create new Event</button></div>
              </div>
            </div>

          {/* <button type="button" onClick={handleCancelClick}>Cancel</button> */}

        </form>
      </div>
      </section>
    );
  };
  
  export default CreateEventForm;




  // 

