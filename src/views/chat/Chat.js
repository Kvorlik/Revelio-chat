import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Header, NewMessage, MessagesList } from "../../components";
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    const { history } = this.props;
    if (history.location.state) {
      this.state = {
        name: history.location.state
      };
    }
    else {
      this.state = {
        name: 'Anon'
      };
    }
  }
  
  render() {
    return (
      <div className="chat">
        <Header isHome={false}/>
        <div className="chat__continer">
          <h1>Chat</h1>
          <h3>Name: {this.state.name}</h3>
          <MessagesList/>
          <div className="container__new-message">
            <NewMessage name={this.state.name}/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Chat);
