import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './LoginScroll.css';

class LoginScroll extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      feedback: null
    };

    this.onChangeName = this.onChangeName.bind(this);
    this.enterChat = this.enterChat.bind(this);
  }

  enterChat(event){
    const { history } = this.props;
    event.preventDefault();
    if (this.state.name) {
      this.setState({feedback: ''});
      if (history) history.push('/chat', this.state.name);
    } else {
      this.setState({feedback: 'You must enter your name'});
    }
  }

  onChangeName(event) {
    this.setState({name: event.target.value});
  }

  render() {
    const { history } = this.props;
    return (
      <div className="login-scroll">
        <form className="login-scroll__form" onSubmit={this.enterChat}>
          <label htmlFor="name">Enter your name:</label>
          <input
            id="name"
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.onChangeName}
            autoFocus
          />
          <p className="form__feedback">{this.state.feedback}</p>
          {(history)
          ? <button type="button" onClick={this.enterChat}>Enter chat</button>
          : <p>Chat unavailable</p>}
          <p className="form__anon-login">
            <Link to='/chat'>Log as anonimous</Link>
          </p>
        </form>
      </div>
    );
  }
}

export default withRouter(LoginScroll);
