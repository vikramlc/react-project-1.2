import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {

  state = {
    userName: "SuperMax"
  };

  userNameChangeHandler = (event) => {
    this.setState({
      userName: event.target.value
    });
  }

  render() {
    return (
      <div>
        <UserInput changed={this.userNameChangeHandler} currentUserName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName={this.state.userName}/>
        <UserOutput userName="Max"/>
      </div>
    );
  }
} 

export default App;
