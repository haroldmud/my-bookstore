import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default class Header extends Component {
  linkStyle = {
    margin: '1rem',
    padding: '10px',
    textDecoration: 'none',
    color: 'blue',
    border: '1px solid blue',
  };

  nonActlink = {
    margin: '1rem',
    padding: '10px',
    textDecoration: 'none',
    color: 'black',
  };

  render() {
    return (
      <header>
        <h1>MY BOOKSTORE</h1>
        <nav>
          <Link
            to={this.props.obj[1].link}
            style={this.props.obj[1].status ? this.linkStyle : this.nonActlink}
          >
            Books
          </Link>
          <Link
            to={this.props.obj[0].link}
            style={this.props.obj[0].status ? this.linkStyle : this.nonActlink}
          >
            Categories
          </Link>
        </nav>
      </header>
    );
  }
}
