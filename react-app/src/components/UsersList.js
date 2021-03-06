import React, { useEffect, useState } from "react";
import { NavLink , Link} from "react-router-dom";
import "./UsersList.css"
import MediaCard3 from './home/BidCard3'

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
            <div className="cell">
              <MediaCard3 key={user.id}
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
      <h1 className="user-profiles-headline">User Profiles</h1>
      {/* <ul>{userComponents}</ul> */}
      <div class="grid">
        {userComponents}
      </div>
    </>
  );
}




// function UserCard({user}) {
  
//   return (
//     <div className="user-card">
//       <img src={user.profile_photo}/>
//       <h3>{user.artist_name}</h3>
//     </div>
//   )
// }

export default UsersList;
