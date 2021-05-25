import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch} from "react-redux";
import LoginForm from "./components/auth/LoginForm";
import SignUpForm from "./components/auth/SignUpForm";
import NavBar from "./components/NavBar";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import UsersList from "./components/UsersList";
import User from "./components/User";
// import { authenticate } from "./services/auth";
import HomePage from "./components/home/HomePage";
import EventPage from "./components/events/EventPage";
// import NewEventForm from "./components/NewEventForm"
import CreateEventForm from "./components/NewEventForm";
import MyEventsPage from "./components/events/MyEventsPage";
import { authenticate } from "./store/session";
import HomeContainer from "./components/home/HomePage";


function App() {
  const dispatch = useDispatch()
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    (async() => {
      await dispatch(authenticate())
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path="/login" exact={true}>
          <LoginForm/>
        </Route>
        <Route path="/sign-up" exact={true}>
          <SignUpForm />
        </Route>
        {/* <Route path="/new-event" exact={true}>
          <NewEventForm authenticated={authenticated} setAuthenticated={setAuthenticated} />
        </Route> */}
        <ProtectedRoute path="/users" exact={true} >
          <UsersList/>
        </ProtectedRoute>
        <ProtectedRoute path="/users/:userId" exact={true}>
          <User />
        </ProtectedRoute>
        <ProtectedRoute path="/" exact={true}> 
          <HomeContainer />
        </ProtectedRoute>
        <ProtectedRoute path="/events/:id" exact={true}>
          <EventPage />
        </ProtectedRoute>
        <ProtectedRoute path="/event-form" exact={true}>
          <CreateEventForm />
        </ProtectedRoute>
        {/* <ProtectedRoute path="/my-events" exact={true} >
          <MyEventsPage />
        </ProtectedRoute> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
