import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
        <footer >
          <div className="container">
          <p><i className={'fa ' + this.props.icon} aria-hidden="true"></i> Copyright© {this.props.copy} - {this.props.year}</p>
          </div>
        </footer>
    );
  }
}

export default Footer;
