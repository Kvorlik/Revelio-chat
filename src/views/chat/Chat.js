import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import {
  NewMessage,
  MessagesList,
  FlexSpacer,
  SingleMessage
} from "../../components";
import './Chat.css';

class Chat extends Component {
  constructor(props) {
    super(props);
    const { history } = this.props;
    if (history.location.state) {
      this.state = {
        name: history.location.state,
        showHistoryView: false
      };
    }
    else {
      this.state = {
        name: 'Anon',
        showHistoryView: false
      };
    }

    this.onChangeView = this.onChangeView.bind(this);
  }

  componentDidMount() {
    var element = document.getElementsByClassName("chat__messages-list");
    element.scrollTop = element.scrollHeight - element.clientHeight;
  }

  onChangeView() {
    this.setState({showHistoryView: !this.state.showHistoryView});
  }
  
  render() {
    let messagesComponent;
    if (this.state.showHistoryView) messagesComponent = <MessagesList/>;
    else messagesComponent = <SingleMessage/>;

    return (
      <div className="chat">
        <div className="chat__header">
          <h1 className="chat__title">Chat</h1>
          <FlexSpacer/>
          <button className="chat__swap-view" onClick={this.onChangeView}>
            Change view
          </button>
          <h2 className="chat__logout">
            {this.state.name} |&nbsp;
            <Link to='/'>logout</Link>
          </h2>
        </div>
        <div className="chat__messages-list">
          {messagesComponent}
        </div>
        <div className="chat__new-message">
          <NewMessage name={this.state.name}/>
        </div>
      </div>
    );
  }
}

export default withRouter(Chat);
