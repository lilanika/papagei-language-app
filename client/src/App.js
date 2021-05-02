import React from 'react';
import './css/App.css';
import './css/media.css';
import './css/landing.css';
import './css/utilities.css';
import './css/navbar.css';
import './auth.css';
import { Route, Redirect } from 'react-router-dom';
import LandingPage from './components/LandingPage'
import Signup from './components/Signup';
import Login from './components/Login';

import HomePage from './components/HomePage';
import Profile from './components/Profile';
import Languages from './components/Languages';
import ShowProfile from './components/ShowProfile';
import MessagesContainer from './components/messages/MessagesContainer';
import MessageForm from './components/messages/MessageForm'; 
import Picture from './components/Picture'
import AboutPapagei from './components/AboutPapagei'

class App extends React.Component {
  state = {
    user: this.props.user
  }
  setUser = user => {
    this.setState({
      user: user
    })
  }
  render() {

    console.log('check the user', this.state.user)
    return (
     
         <div className="App">
          <LandingPage user={this.state.user} setUser={this.setUser} />
          <Route
            exact path='/'
            render={props => {
              if (this.state.user) {
                return <HomePage user={this.state.user} {...props} />
              } else return <AboutPapagei />
            }}
          /> 

        <Route
          exact path='/profile'
          render={props => {
            if (this.state.user) {
              return <Profile user={this.state.user} {...props} setUser={this.setUser} />
            } else return <Redirect to='/' />
          }}
        />

        <Route
          exact path='/messages'
          render={props => {
            if (this.state.user) {
              return <MessagesContainer user={this.state.user} {...props} setUser={this.setUser} />
            } else return <Redirect to='/' />
          }}
        />

        <Route
          exact path='/languages'
          render={props => {
            if (this.state.user) {
              return <Languages user={this.state.user} {...props} setUser={this.setUser} />
            } else return <Redirect to='/' />
          }}
        />

        <Route
          exact path='/upload'
          render={props => {
            if (this.state.user) {
              return <Picture user={this.state.user} {...props} setUser={this.setUser}/>
            } else return <Redirect to='/' />
          }}
        />
        
        <Route
          exact path='/users/:id'          render={props => {
            if (this.state.user) {
              return <ShowProfile user={this.state.user} {...props} />
            } else return <Redirect to='/' />
          }}
        />

        <Route
          exact path='/users/:id/message'          render={props => {
            if (this.state.user) {
              return <MessageForm user={this.state.user} {...props} />
            } else return <Redirect to='/' />
          }}
        />

        
        <Route
          exact path='/signup'
          // component={Signup}
          // if you want to pass props in the routing we use a so called render prop
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
       

        <Route
          exact path='/login'
          render={props => <Login setUser={this.setUser} {...props} />}
        />

      </div>
    );
  }
}
export default App;