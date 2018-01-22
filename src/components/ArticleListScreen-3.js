import React, { Component } from 'react';
import NavBar from './NavBar';

export default class ArticleListScreen extends Component {
  render() {
    // const {uid, onNickNameClick} = this.props;
    const { nickName, onNickNameClick } = this.props;
    return (
      <div>
        <NavBar nickName={nickName} onNickNameClick={onNickNameClick} />
        Bulletin Board List on S&P500
        </div>
    )
  }
}
