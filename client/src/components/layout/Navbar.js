import React from 'react'
import {Link} from 'react-router-dom'


// import { Link } from 'react-router-dom'
// import { logout } from '../services/auth';



/*  <nav class="navbar bg-dark">   <li><Link to="/messages">Messages </Link></li>
        <li>| </li> */
const Navbar = (props) => {
  
  return (
    <nav className="navbar">
    <ul>
    <img 
     className=" img-smart round-img png margin-y "
     src="https://img.icons8.com/color/48/000000/parrot.png"
    alt=""
    />
     <Link to="/"><h1>Papagei</h1></Link>
    </ul>
      <ul class="nav">
        <li class="start"><Link to="/">Start </Link></li>
        
        <div
         className="msg bg-blue ">
         <li><Link to="/messages"><i class="fas fa-comments"></i></Link></li>  
         </div>
      
       <li><Link to="/profile"><i class="fas fa-user-circle profile-i"></i></Link></li>       
        {/* <li>
              <Link to='/' onClick={() => handleLogout(props)} >Logout</Link>
        </li> */}
      </ul>
    </nav>
  )
}

export default Navbar
