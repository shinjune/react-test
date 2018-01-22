import React, {Component} from 'react';
import NavBar from './NavBar.js'

export default class ArticleScreen extends Component {
  render() {



    const {title} = this.props;
    return (
      <div>
        {title}
        {}
      </div>
    )
  }
}
