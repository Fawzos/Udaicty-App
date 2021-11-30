import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AddUser from "./AddUser";
import ListUsers from "./ListUsers";

class App extends Component {
  state = {
  	users: []
  }
  
  createContact = (user) => {
    user.numGamesPlayed = 0;
  	this.setState((currentState) => ({
    	users: [...currentState, user],
    }));
  };
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
		<AddUser users={this.state.users} 
		onAddUser={this.createContact}
		/>
		<ListUsers users={this.state.users} />
      </div>
    );
  }
}

export default App;