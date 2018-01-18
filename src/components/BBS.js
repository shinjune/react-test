import React, {Component} from 'react';
import * as firebase from 'firebase';

export default class BBS extends Component {
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyC5bvpoKyfa3qwTxhSt0PxgQZI2dI3QbZc",
      authDomain: "fds-cra.firebaseapp.com",
      databaseURL: "https://fds-cra.firebaseio.com",
      projectId: "fds-cra",
      storageBucket: "fds-cra.appspot.com",
      messagingSenderId: "966283711333"
    };
    firebase.initializeApp(config);
  }
  render() {
    return (
      <div>BBS</div>
    )
  }
}
