import React, { Component } from 'react'
import axios from 'axios';
import {Link} from 'react-router-dom'

export default class UsersList extends Component {
  state = {
    currentUser: this.props.user,
    users: [],
    location: '',
    nativeLanguages: '',
    learningLanguages: '',
    imageUrl: '',  
    
  }

  componentDidMount(){
    this.getUsers()
   
  }

 
  
  getUsers = async () => {
    //console.log("route triggered to fget users")
    let response = await axios.get('/api/users')
    //console.log(response, "response at FE")
    let {data} = response;
    //console.log(data, "userlsit at FE")
    this.setState({users: data})
  }

  handleChange = event => {
    const name = event.target.name;
    const target = event.target; 
    const value = target.value;
    console.log(name , value)
    this.setState({
      [name]: value
    })
    }


  render() {

    console.log("IMG URL ", this.state.imageUrl)
    //console.log(this.props, "props at userslist")
    
    console.log("USER location", this.state.currentUser.location)
    

    const filteredUsers = this.state.users.filter(eachuser => {
      return (eachuser.location === this.state.location || !this.state.location)
      && (eachuser.nativeLanguages === this.state.learningLanguages ||!this.state.learningLanguages)
      && (eachuser.learningLanguages.includes(this.state.nativeLanguages) ||!this.state.nativeLanguages)
    })

   
    console.log(filteredUsers)
    return (
      <div className="max-width-userList"> 

 
      
      <div class=" p-2 "> </div>
      <div className=" match"> Find your match
      <form className="form filter " onSubmit={this.handleSubmit}> 
      <div> 
      <select name="location" id="location" form="form" onChange={this.handleChange}>
          <option value='' selected> Select a city </option>
          <option value="">all locations</option>
          <option value="Berlin">Berlin</option>
          <option value="Hamburg">Hamburg</option>
          <option value="Köln">Köln</option>
          <option value="Paris">Paris</option>
          <option value="Grenoble">Grenoble</option>
          <option value="London">London</option>
          <option value="Barcelona">Barcelona</option>
          <option value="Rome">Rome</option>
          <option value="Poznan">Poznan</option>
          <option value="Amsterdam">Amsterdam</option>
          </select> 
          </div>
          <div>

          <label htmlFor="learningLanguages" ></label>
          <select name="learningLanguages" id="learningLanguages" form="form" onChange={this.handleChange} >
          <option value="" selected>learning language</option>
          <option value="">All</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Italian">Italian</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
          <option value="Arabic">Arabic</option>
          <option value="Russian">Russian</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option>
          </select>
          </div>
          <div>
          <select name="nativeLanguages" id="nativeLanguages" form="form" onChange={this.handleChange}>
          <option value="" selected> native language </option>
          <option value="">All</option>
          <option value="English">English</option>
          <option value="French">French</option>
          <option value="German">German</option>
          <option value="Italian">Italian</option>
          <option value="Spanish">Spanish</option>
          <option value="Chinese">Chinese</option>
          <option value="Arabic">Arabic</option>
          <option value="Russian">Russian</option>
          <option value="Polish">Polish</option>
          <option value="Portuguese">Portuguese</option> 
          </select>
          </div>
        </form>
        </div>
        <div className="bg-light">
        <div className=" profile-user  ">
        {filteredUsers.map((user, index) => {
          console.log('HERE USER', user)
        
          return (
            
            <Link to={`/users/${user._id}`}  className=" linkwrapper"><div className="  ">
            <div className= "profile card-color animation " key={index}  >
          <img className="img-profile p-1"
           
            src={user.imageUrl}
            alt = ""
            /*src={`https://res.cloudinary.com/demo/image/upload/w_200,h_200,c_fill,r_max/${user.imageUrl}`} */
            /*https://res.cloudinary.com/demo/image/upload/w_100,h_100,c_thumb,g_faces/couple.jpg */
          />
          <div className="p-1">
            <h2 className="my-1">{user.name} {user.age
            }</h2>
            
           <p>{user.goal} </p>
            <div className ="card-buttons">
            <Link to={`/users/${user._id}`}  className="btn btn-dark my-2">view</Link>
            <Link to={`/users/${user._id}/message`} className="btn btn-dark my-2 p-icons  "> <i class="fas fa-paper-plane"></i></Link>
            </div>
          </div>
         
          <ul>
            <li className="text-primary">
              <p className="grey"> <i class="far fa-comments text-secondary p-icons "></i>speaks</p>
              <h3>{user.nativeLanguages}</h3>
            </li>
            <li className="text-primary">
            <p className="grey "><i class="fas fa-comments text-secondary p-icons  ">
            </i>learns</p>
              <h3>{user.learningLanguages}</h3>   
            </li>
            <li className="text-primary location-smart ">
            <p  className="grey "><i class=" fas fa-map-marked-alt p-icons text-secondary  ">
            </i></p>
              <h3>{user.location}</h3>   
            </li>
          </ul>
          
        </div>
        </div>
       </Link>

      
        
            ) 
        })}
        </div>
        </div>
        </div>
     
       
      
    
    )
   
  }
 
}

