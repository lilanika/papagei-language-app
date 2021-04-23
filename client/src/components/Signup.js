import React, { Component } from 'react'
import { signup } from '../services/auth';
import {Link} from 'react-router-dom';


export default class Signup extends Component {
  state = {
    username: '',
    password: '',
    message: '',
    name:'',
    nativeLanguages: '', 
    learningLanguages: [],
    location: '', 
    age: 0,
    gender: '', 
    description: '', 
    goal: '' 
  }
  handleChange = event => {
    console.log(event.target)
    const { name, value } = event.target;
    this.setState({
      [name]: value
    })
  }
   handleNumber = event => {
    let value = event.target.value;
    this.setState({
        age : value
     })
 }
  handleSubmit = event => {
    event.preventDefault();
    const { username, password, name, nativeLanguages, learningLanguages, location, age, gender, description, goal} = this.state;
    signup(username, password, name, nativeLanguages, learningLanguages, location, age, gender, description, goal)
      .then(user => {
        if (user.message) {
          this.setState({
            message: user.message,
            username: '',
            password: '',
            message: '',
            name:'',
            nativeLanguages:'',
            learningLanguages: [],
            location: '', 
            age: 0, 
            gender: '',
            description: '', 
            goal: '' 
          })
        } else {
          // the response from the server is a user object -> signup was successful
          // we want to put the user object in the state of App.js
          console.log(user)
          this.props.setUser(user);
          this.props.history.push('/');
        }
      })
  }
  render() {
    return (
      <section className="container-auth p-2 ">
      <div className="form-group" > 
        <h1 class="large text-primary">Sign Up</h1>
        <p class="lead"><i class="fas fa-user"></i> Create Your Account</p>
        <form className="form grid-one auth" onSubmit={this.handleSubmit}>
          <label htmlFor="username"> </label>
          <input
            className="form-group form-text " 
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
            id="username"
            placeholder="username"
          />
          <label htmlFor="password" > </label>
          <input
             className="form-group form-text" 
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            id="password"
            placeholder="password"
          />
          <label htmlFor="name " ></label>
          <input
          className="form-group form-text" 
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            id="name"
            placeholder="name"
           
          />
           <h2 className="m-3">Languages</h2>
          <label htmlFor="nativeLanguages" className="m"></label>
          <select name="nativeLanguages" id="nativeLanguages" form="carform" onChange={this.handleChange}  required >
          <option selected> Choose a native language</option>
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
          <label htmlFor="learningLanguages" className="m-1"></label>
          <select name="learningLanguages" id="learningLanguages" form="carform" onChange={this.handleChange} required >
          <option selected>Choose a learning language</option>
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
        
          <label htmlFor="location" className="m-1"></label>
          <select name="location" id="location" form="carform" onChange={this.handleChange}>
          <option selected>Choose a city</option>
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
          <h2 className="m-3"> Profile Settings </h2>
          <label className="grey " htmlFor="age "><p>choose your age</p></label>
          <input
            className="form-group form-text" 
            type="Number"
            name="age"
            value={this.state.age}
            onChange={this.handleNumber}
            id="age"
            min="16"
            max="100"
            required 
          />  
          <label htmlFor="gender" className="m-1"></label>
          <select name="gender" id="gender" form="carform" onChange={this.handleChange}>
          <option selected>Choose a gender...</option>
          <option value="female">Female</option>
          <option value="male">Male</option>
          <option value="transgender">Transgender</option>
          </select>
          <label htmlFor="description" className="m"></label>
          <textarea
             className="form-group form-text" 
             type="text" rows="4" cols="50"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            id="description"
            placeholder="Write something about you..."
          />
          <label htmlFor="goal" ></label>
          <textarea
            className="form-group form-text" 
            type="text" rows="4" cols="50"
            name="goal"
            value={this.state.goal}
            onChange={this.handleChange}
            id="goal"
            placeholder="Your learning goals... "
          />   
          <button  className="btn btn-primary m-2" type="submit"> 
          <h3 >Sign Up</h3></button>
          {this.state.message && (
            <h3>{this.state.message}</h3>
          )}
        </form>
        <p class="my-1">
        Already have an account? <Link to="/login" className="text-dark">Login</Link>
      </p>
      </div>
      </section>
    )
  }
}