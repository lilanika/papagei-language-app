import React from 'react'
import { Link } from 'react-router-dom'
import { logout } from '../services/auth';





const handleLogout = props => {
  logout().then(() => {
    props.setUser(null)
  }) 
}

export default function LandingPage(props) {
  console.log(props.user);
  return (
    <div>
      <ul>
        {/* If we have a logged in user -> show projects and logout otherwise show login and signup */}
        {props.user ? (
          <>
            <li>
              <Link to="/" onClick={() => handleLogout(props)}>
                Logout
              </Link>
            </li>
          </>
        ) : (
          <>
            <nav className="navbar bg-dark ">
              <ul>
              <img 
                className=" img-smart round-img png margin-y"
                src="https://img.icons8.com/color/48/000000/parrot.png"
                alt=""
              />
                
                <h1>Papagei</h1>
              </ul>
              <ul>
              <li>
                  <Link to="/" className="">
                    About Papagei 
                  </Link>
                </li>
                <li>
                  <Link to="/signup" className="">
                    Signup
                  </Link>
                </li>
                <li>
                  <Link to="/login" className="">
                    Login
                  </Link>
                </li>

              </ul>
            </nav>


            
           

            

          
            

            
         
         
          </>
        )}
      </ul>
    </div>
  );
}


/* DONT DELETE IT

<p>On Pagaei, millions of members explore the world of language together. Become part of the community, find language partners that suit you and share your learning successes with them. </p>
   <section className="showcase">
              <div class="overlay"></div>
              <div class="text">
                <h2>Learn language </h2>
                <h3>together with Papagei</h3>
                <p>
                Simply get into conversation with native speakers 
                </p>
                <Link to="/signup" className="btn-dark">
                register for free
                  </Link>
                  
              
              </div>
             
            </section>
              <div class="icons my-1">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fas fa-globe fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin fa-2x"></i>
            </a>
             <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube fa-2x"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-instagram fa-2x"></i>
            </a>
          </div>
*/



