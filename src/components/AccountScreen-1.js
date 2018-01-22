import React, { Component } from 'react';
import styled from 'styled-components'

const Wrap = styled.div`
background-color: crimson;
`

export default class AccountScreen extends Component {
  render() {
    return (
      <Wrap>
        <input type="text" />
        <button> Submit </button>
      </Wrap>
    )
  }
}
