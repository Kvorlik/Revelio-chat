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
                timestamp: moment(doc.data().timestamp).format('lll')
              }
            ]
          });
        }
      })
    })
  }

  render() {
    const messagesPool = this.state.messages.map(message =>
      <li key={message.id}>
        <span>{message.name} </span>
        <span>{message.message} </span>
        <span>{message.timestamp}</span>
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
