import React, { Component } from 'react';
import * as firebase from 'firebase';
import styled from 'styled-components';



const Wrap = styled.nav`
background-color: tomato;
padding: 1em;
display: flex;
align-items: center;
`
const InnerLeft = styled.div`
flex-grow:1;
color: white;
font-size: 2em;
`
const LogOutButton = styled.button`
border-radius: 3px;
padding: 3em;
border: none;
`
const NickName = styled.a`
color: #333333;
`



export default class NavBar extends Component {
  handleLogoutClick = () => {
    firebase.auth().signOut();
  }
  handleNickNameClick = e => {
    this.props.onNickNameClick()
  }
  render() {
    const { nickName } = this.props;
    return (
      <Wrap>
        <InnerLeft>BBS</InnerLeft>
        <LogOutButton onClick={this.handleLogoutClick}>Logout</LogOutButton>
        <NickName onClick={this.handleNickNameClick}>{nickName}</NickName>
      </Wrap>
    )
  }
}
