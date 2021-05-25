import React from 'react';
import { Link} from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import styled from 'styled-components'
import { menuData } from './data/MenuData';
import './NavBar.css'
import Button from '@material-ui/core/Button'
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

// const Nav = styled.nav`
//   height: 60px;
//   background: red;
// `;

// const NavBar = ({ setAuthenticated }) => {
//   return (
//       <nav>
//         <ul>
//           <li className="nav-home">
//             <NavLink to="/" exact={true} activeClassName="active">
//               Home
//             </NavLink>
//           </li>
//           <li className="nav-login">
//             <NavLink to="/login" exact={true} activeClassName="active">
//               Login
//             </NavLink>
//           </li>
//           <li className="nav-sign-up">
//             <NavLink to="/sign-up" exact={true} activeClassName="active">
//               Sign Up
//             </NavLink>
//           </li>
//           <li className="nav-users">
//             <NavLink to="/users" exact={true} activeClassName="active">
//               Users
//             </NavLink>
//           </li>
//           <li>
//             <LogoutButton setAuthenticated={setAuthenticated} />
//           </li>
//         </ul>
//       </nav>
//   );
// }

const Navbar = ({authenticated, setAuthenticated}) => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img className="nav-logo" src='https://i.ibb.co/2FvtBgn/oxillary.png' alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/my-events' activeStyle>
            My Events
          </NavLink>
          <NavLink to='/users' activeStyle>
            Users
          </NavLink>
          {!authenticated && 
            <NavLink to='/sign-up' activeStyle>
              Sign Up
            </NavLink>
          }
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
        <NavBtn>
          <LogoutButton setAuthenticated={setAuthenticated} />
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;




// style components practice
// const Logo = styled(Link)`
//   color: #fff;
// `

// const MenuBars = styled.i``;
// const NavMenu = styled.div``;
// const NavMenuLinks = styled(Link)``;

// const NavBar = () => {
//   return (
//     <div>
//       <Nav>
//         <Logo to="/">Auxillary</Logo>
//         <MenuBars />
//         <NavMenu>
//           {menuData.map((item, index) => {
//             <NavMenuLinks to={item.link} key={index}>
//               {item.title}
//             </NavMenuLinks>
//           })}
//         </NavMenu>
//         <h1>Navbar</h1>
//       </Nav>
//     </div>
//   )
// }


// export default NavBar;