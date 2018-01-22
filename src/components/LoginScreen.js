import React, {Component} from 'react';
import * as firebase from 'firebase'


export default class LoginScreen extends Component {
  handleLoginClick = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = result.credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      // ...
      console.log(result.user)
    })
  }
  render() {
    return (
      <button onClick={this.handleLoginClick}>구글로 로그인</button>
    )
  }
}
