import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import {Header} from "../components";

class Chat extends Component {
  constructor(props) {
    super(props);
    const { history } = this.props;
    this.state = {
      name: history.location.state,
    };
  }
  
  render() {
    return (
      <div className="chat">
        <Header isHome={false}/>
        <h1>Chat</h1>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
}

export default withRouter(Chat);
