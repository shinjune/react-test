import React, { Component } from 'react';
import * as firebase from 'firebase';

export default class NavBar extends Component {
  handleLougoutClick = () => {
    firebase.auth().signOut();

  }
  render() {
    return (
      <div>
        <button onClick={this.handleLougoutClick}>Logout</button>
      </div>
    )
  }
}
