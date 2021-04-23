import React from 'react'
import {Link} from 'react-router-dom'


// import { Link } from 'react-router-dom'
// import { logout } from '../services/auth';


/*  <nav class="navbar bg-dark">  */
const Navbar = (props) => {
  return (
    <nav className="navbar bg-dark">
    <ul>
    <img 
     className=" img-smart round-img png margin-y"
     src="https://img.icons8.com/color/48/000000/parrot.png"
    alt=""
    />
     <h1>Papagei</h1>
    </ul>
      <ul>
        <li><Link to="/">Community</Link></li>
        <li><Link to="/messages"> Messages</Link></li>

        <li><Link to="/profile">Profil</Link></li>
    
        
        {/* <li>
              <Link to='/' onClick={() => handleLogout(props)} >Logout</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
