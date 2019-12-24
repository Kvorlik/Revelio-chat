import React, { Component } from 'react';
import './SingleMessage.css';
import db from '../../firebase/init';

class SingleMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
  }

  componentDidMount() {
    let ref = db.collection('messages').orderBy('timestamp');
    ref.onSnapshot(snapshot => {
      snapshot.docChanges().forEach(change => {
        if (change.type === 'added') {
          let doc = change.doc;
          this.setState({
            message: doc.data().message
          });
        }
      })
    })
  }

  render() {
    return (
      <div className="single-message">
        <span className="single-message__content">
          {this.state.message}
        </span>
      </div>
    );
  }
}

export default SingleMessage;
