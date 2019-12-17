import React, { Component } from 'react';
import './NewMessage.css';
import db from '../../firebase/init';

class NewMessage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      message: '',
      feedback: ''
    };

    this.onChangeMessage = this.onChangeMessage.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  sendMessage(event){
    event.preventDefault();
    if (this.state.message) {
      db.collection('messages').add({
        message: this.state.message,
        name: this.state.name,
        timestamp: Date.now()
      }).catch(err => {
        console.log(err);
      });
      this.setState({message: ''});
      this.setState({feedback: ''});
    } else {
      this.setState({feedback: 'You must type a message'});
    }
  }

  onChangeMessage(event) {
    this.setState({message: event.target.value});
  }

  render() {
    return (
      <div className="new-message">
        <form className="new-message__form" onSubmit={this.sendMessage}>
          <input
            id="message"
            type="text"
            name="message"
            className="form__input"
            placeholder="Type here"
            value={this.state.message}
            onChange={this.onChangeMessage}
            autoFocus
          />
          <p>{this.state.feedback}</p>
        </form>
      </div>
    );
  }
}

export default NewMessage;
