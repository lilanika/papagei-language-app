import React from 'react'
import {Link} from 'react-router-dom'


// import { Link } from 'react-router-dom'
// import { logout } from '../services/auth';



/*  <nav class="navbar bg-dark">   <li><Link to="/messages">Messages </Link></li>
        <li>| </li> */
const Footer = (props) => {
  
  return (
   <div className=" flexbox footer ">
    <p>Built and designed by<Link><i class="fab fa-github"></i> lilanika</Link> &<Link><i class="fab fa-github"></i> orianemgn </Link>during Ironhacks bootcamp</p>

</div>
  )
}

export default Footer