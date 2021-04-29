import React from 'react'
import {Link} from 'react-router-dom'
import logo from './parrot.png';

console.log(logo)
// import { Link } from 'react-router-dom'
// import { logout } from '../services/auth';

/* width: 5%q;
    width: 30px;
    height: 30px;
    margin: auto 0;
}*/ 

/*  <nav class="navbar bg-dark">   <li><Link to="/messages">Messages </Link></ <img 
     className=" img-smart round-img png margin-y"
     src={logo}
    alt=""
    />li>
        <li>| </li> */
const Navbar = (props) => {
  
  return (
    <nav className="navbar">
    <ul>
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
