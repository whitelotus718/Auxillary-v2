import React from "react";
// import { logout } from "../../services/auth";
import { logout } from "../../store/session";
import { useDispatch } from "react-redux";
import Button from '@material-ui/core/Button'

const LogoutButton = () => {
  const dispatch = useDispatch();

  const onLogout = async (e) => {
    await dispatch(logout());
  };

  return <Button onClick={onLogout} variant="contained" color="primary" >Logout</Button>;
};

export default LogoutButton;
