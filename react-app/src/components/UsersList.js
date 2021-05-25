import React, { useEffect, useState } from "react";
import { NavLink , Link} from "react-router-dom";
import "./UsersList.css"

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch("/api/users/");
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userComponents = users.map((user) => {
    return (
        <Link to={`/users/${user.id}`} style={{ textDecoration: 'none' }}>
          <div className="user-card-container">
            <div>
              <UserCard key={user.id}
                user={user}
              />
            </div>            
            </div>                    
       </Link>
      
      // <li key={user.id}>
      //   <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      // </li>
    );
  });

  return (
    <>
      <h1>User Profiles</h1>
      <ul>{userComponents}</ul>
    </>
  );
}




function UserCard({user}) {
  
  return (
    <div className="user-card">
      <img src={user.profile_photo}/>
      <h3>{user.artist_name}</h3>
    </div>
  )
}

export default UsersList;
