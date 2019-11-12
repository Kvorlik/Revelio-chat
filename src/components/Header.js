import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header>
        <nav>
          <ul>
            <li><Link to='/'>Welcome</Link></li>
            <li><Link to='/chat'>Chat</Link></li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
