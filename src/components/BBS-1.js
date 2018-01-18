import React, { Component } from 'react';
import * as firebase from 'firebase';
import LoginScreen from './LoginScreen.js';
import ArticleListScreen from './ArticleListScreen.js';
console.log(ArticleListScreen);

export default class BBS extends Component {
  state = {
    page: 'login'
  }
  componentDidMount() {
    const config = {
      apiKey: "AIzaSyA_78CnqhWbTFj2BucbI6FPeQSPH7DOAks",
      authDomain: "react-memo-575d6.firebaseapp.com",
      databaseURL: "https://react-memo-575d6.firebaseio.com",
      projectId: "react-memo-575d6",
      storageBucket: "react-memo-575d6.appspot.com",
      messagingSenderId: "370011951208"
    };
    firebase.initializeApp(config);
    firebase.auth().onAuthStateChanged(user => {
      //function이 있으면 this가 바뀌기 때문에 화살표 함수로 바꿔야 한다. 매우 중요.
      if (user) {
        this.setState({
          page: 'list'
          //정확히 말하면 page: list가 위의 state에 병합된다.
        })
        // User is signed in.
      } else {
        // No user is signed in.
      }
    });
  }
  render() {
    return (
      <div>
        {
          this.state.page === 'login'
            ? <LoginScreen />
            : this.state.page === 'list'
              ? <ArticleListScreen />
              : null
        }
      </div>
    )
  }
}
