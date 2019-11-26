import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Header extends Component {
  render() {
    let link;
    if (this.props.isHome === false) {
      link = <li><Link to='/'>Logout</Link></li>;
    }
    else {
      link = <li><Link to='/chat'>Log as anonimous</Link></li>
    }

    return (
      <header>
        {link}
      </header>
    );
  }
}

export default Header;
