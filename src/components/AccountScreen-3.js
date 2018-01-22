import React, { Component } from 'react';
import styled from 'styled-components'
import NavBar from './NavBar';

const Wrap = styled.div`
background-color: crimson;
`


export default class AccountScreen extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const nickName = e.target.elements.nickName.value
    //위의 nickName은 below input의 DOM elements
    this.props.onNickNameSubmit(nickName);

  }
  // 위의 eventhandler가 nick field에서 enter 가 됐을 때와 저장되었을 때 2경우에 작동하게 만들자
  // form element의 submit event handler를 등록하면
  render() {
    const { nickName, onNickNameClick } = this.props;
    return (
      <Wrap>
        <NavBar nickName={nickName} onNickNameClick={onNickNameClick} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" name="nickName" />
          <button type="submit">저장</button>
        </form>
      </Wrap>
    )
  }
}
