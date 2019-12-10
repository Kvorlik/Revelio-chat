import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { NewMessage, MessagesList, FlexSpacer } from "../../components";
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
        <div className="chat__header">
          <h1 className="chat__title">Chat</h1>
          <FlexSpacer/>
          <h3 className="chat__logout">
            {this.state.name} |&nbsp;
            <Link to='/'>logout</Link>
          </h3>
        </div>
        <div className="chat__messages-list">
          <MessagesList/>
        </div>
        <div className="chat__new-message">
          <NewMessage name={this.state.name}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Chat);
