import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
        <header>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h1><i className={'fa ' + this.props.icon} aria-hidden="true"></i> {this.props.text}</h1>
              </div>
              <div className="col-lg-6 menu">
              <nav>
                <Link to="/">Home</Link>
                <Link to="/contact">Contact</Link>
              </nav>
              </div>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;
