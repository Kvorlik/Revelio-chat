import React, { Component } from 'react';
import {Header, LoginScroll} from "../components";

class Home extends Component {
  render() {
    return (
      <div className="home">
        <Header isHome={true}/>
        <LoginScroll/>
      </div>
    );
  }
}

export default Home;
