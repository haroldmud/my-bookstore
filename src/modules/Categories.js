import React, { Component } from 'react';
import Header from './Header';

export default class Categories extends Component {
  links = [
    { status: true, link: '../categories' },
    { status: false, link: '../' },
  ]

  render() {
    return (
      <div>
        <Header obj={this.links} />
        <h2> Categories</h2>
        <button type="button">check status</button>
      </div>
    );
  }
}
