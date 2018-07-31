import React, { Component } from 'react';
import './App.css';
// we can just import from the folder because the default file is index.js
import Login  from './Login';
import MainContainer from './MainContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      loggedIn: false,
      username: ''
    }
  }
  login = (username) => {
    // here we will setState of this component but we will call it in the Login component
    console.log(username);
    this.setState({
      username: username,
      loggedIn: true
    })
  }
  render() {
    console.log(this.state)
    // ternary statement in React and how to handle the rendering of two components based on a boolean value
    return (
      <div className="App">
      {this.state.loggedIn ? <MainContainer username={this.state.username}/> : <Login login={this.login}/> }
      </div>
    )
  }
}

export default App;
