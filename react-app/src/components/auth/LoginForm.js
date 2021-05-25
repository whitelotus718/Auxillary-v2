import React, { useState } from "react";
import { Redirect } from "react-router-dom";
// import { login } from "../../services/auth";
import { login } from "../../store/session";
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Button from '@material-ui/core/Button'
import SaveIcon from '@material-ui/icons/Save'
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField'
import  { useDispatch, useSelector } from "react-redux";
import './LoginForm.css'

const LoginForm = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.session.user);

  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data.errors) {
      setErrors(data.errors);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-form">
      <form onSubmit={onLogin}>
        <div>
          {errors.map((error) => (
            <div>{error}</div>
          ))}
        </div>
        <div className="login-input-1">
          <label htmlFor="email">Email</label>
          <TextField
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
            variant="outlined"
          />
        </div>
        <div className="login-input-2">
          <label htmlFor="password">Password</label>
          <TextField
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
            variant="outlined"
          />
        </div>
        <div className="login-cancel-btns">
          <ButtonGroup>
            <Button 
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              startIcon={<SaveIcon />}>
              {/* endIcon={<SaveIcon />} */}
                Login
              </Button>
            <Button 
              variant="contained"
              color="secondary"
              size="large"
              startIcon={<DeleteIcon />}>
                Cancel
              </Button>
          </ButtonGroup>
        </div>  
      </form>
    </div>
  );
};

export default LoginForm;
