import React, { Component } from 'react';
import './MessagesList.css';
import db from '../../firebase/init';
import moment from 'moment';

class MessagesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: []
    };
  }

  componentDidMount() {
    let ref = db.collection('messages').orderBy('timestamp');
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          let doc = change.doc;
          this.setState({
            messages: [
              ...this.state.messages, {
                id: doc.id,
                name: doc.data().name,
                message: doc.data().message,
                timestamp: moment(doc.data().timestamp).calendar()
              }
            ]
          });
        }
      })
    })
  }

  render() {
    const messagesPool = this.state.messages.map(message =>
      <li className="messages-list__message" key={message.id}>
        <span className="message__name">{message.name} </span>
        <span className="message__content">{message.message} </span>
        <span className="message__time">{message.timestamp}</span>
      </li>
    );
    return (
      <div className="messages-list">
        <ul>{messagesPool}</ul>
      </div>
    );
  }
}

export default MessagesList;
