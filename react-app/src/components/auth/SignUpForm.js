import React, { useState } from "react";
import { Redirect } from 'react-router-dom';
// import { signUp } from '../../services/auth';
import { signUp } from '../../store/session';
import { useDispatch, useSelector } from "react-redux";

import "./SignUpForm.css"

const SignUpForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [artistName, setArtistName] = useState("");
  const [profilePhoto, setProfilePhoto] = useState("");


  // const signUp = async (username, email, password, artistName) => {
  //   const response = await fetch("/api/auth/signup", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       username,
  //       email,
  //       password,
  //       artistName,
  //     }),
  //   });
  //   const user = await response.json();
  //   return user
  // }

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      await dispatch(signUp(username, email, password));
    }
  };


  const updateProfilePhoto= (e) => {
    setProfilePhoto(e.target.value);
  };

  const updateArtistName= (e) => {
    setArtistName(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (

    <div className="wrapper">

      <div className="title">
        <h1> Create an Account </h1>
      </div>

    <form onSubmit={onSignUp}>
      <div className="contact-form">
        <div className="input-fields">
          <input
            className="input"
              placeholder="User Name"
              type="text"
              name="username"
              onChange={updateUsername}
              value={username}
             />
            <input
              className="input"
              placeholder="Email"
              type="text"
              name="email"
              onChange={updateEmail}
              value={email}
             />
            <input
              className="input"
              placeholder="Password"
              type="password"
              name="password"
              onChange={updatePassword}
              value={password}
             />
            <input
              className="input"
              placeholder="Repeat Password"
              type="password"
              name="repeat_password"
              onChange={updateRepeatPassword}
              value={repeatPassword}
              required={true}
             />
            <input
                className="input"
                placeholder="Profile Photo"
                type="text"
                name="profile_photo"
                onChange={updateProfilePhoto}
                value={profilePhoto}
              />
        </div>

        <div className="msg">
          <textarea
                className="input"
                placeholder="Artist Name"
                type="text"
                name="artist_name"
                onChange={updateArtistName}
                value={artistName}
              />
          <div className="btn"><button type="submit">Sign Up</button></div>
        </div>

      </div>

  </form>
  </div>
    );
};

export default SignUpForm;
