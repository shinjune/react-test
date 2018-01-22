import React, { Component } from 'react';
import * as firebase from 'firebase';
import LoginScreen from './LoginScreen.js';
import ArticleListScreen from './ArticleListScreen.js';
import AccountScreen from './AccountScreen.js'

console.log(ArticleListScreen);

export default class BBS extends Component {
  state = {
    page: 'login'
  }
  pageToAccount = () => {
    this.setState({
      page:'account'
    });
  }
//아래쪽 element로 보내줘서 실행하는 함수이므로 화살표 함수로 해야한다.

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
    firebase.auth().onAuthStateChanged(async user => {
      //function이 있으면 this가 바뀌기 때문에 화살표 함수로 바꿔야 한다. 매우 중요.
      if (user) {
       const snapshot = await firebase.database().ref(`users/${user.uid}/nickName`).once('value');

        this.setState({
            page: 'list',
          //정확히 말하면 page: list가 위의 state에 병합된다.
          //이 안에 this.state 이렇게 쓰면 오류가 날 화률이 매우 높다.
          uid: user.uid,
          nickName: snapshot.val()
        });
        // User is signed in.
      } else {
        this.setState({
          page: 'login'
        })
        // No user is signed in.
      }
    });
  }

saveNickName = async nickName => {
  const {uid} = this.state;
  await firebase.database().ref(`users/${uid}/nickName`).set(nickName)
  //firebase의 set을 사용 set vs update check
//alert(`saveNickName: ${nickName}`);
  this.setState({
    nickName,
    page : 'list'
  });
}
// firebase에 저장하고 잘 저장이 되면 화면에 보여주는 method를 만들자
// 실제 event 객체를 다루는건 handleSubmit이 하도록 하자. why? 역할과 책임을 고려. 유지보수 편리하다


  render() {
    const {nickName, uid} = this.state;
    //속성을 빼오고 싶을 때는 render함수 아래에 분해대입 하자!
    return (
      <div>
        {
          this.state.page === 'login'
          ? <LoginScreen />
          : this.state.page === 'list'
          ? <ArticleListScreen
          onNickNameClick={this.pageToAccount}
          nickName={nickName || uid}/>
          // 위를 보면 NavBar로 다시 정보를 넘긴다
          //uid로 넘겨주던 prop을 nickName으로 변경. nickName 있으면 쓰고 없으면 uid
          : this.state.page === 'account'
          ? <AccountScreen
              onNickNameClick={this.pageToAccount}
              nickName={nickName || uid}
              onNickNameSubmit={this.saveNickName}/>
          :null
}
      </div>
    )
  }
}
