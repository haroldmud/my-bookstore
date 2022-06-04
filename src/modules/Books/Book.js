import React, { Component } from 'react';
import '../../styles/Book.css';

export default class Book extends Component {
  render() {
    return (
      <div className="Book">
        <div className="leftH">
          <span>{this.props.book.type}</span>
          <h2>{this.props.book.title}</h2>
          <span>{this.props.book.Author}</span>
          <ul>
            <li>
              <button type="button">Comments</button>
            </li>
            <li>
              <button type="button">Remove</button>
            </li>
            <li>
              <button type="button">Edit</button>
            </li>
          </ul>
        </div>
        <div className="Middle">
          <div className="Circle" />
          <span>{this.props.book.Completed}</span>
          <span>Completed</span>
        </div>
        <div className="right">
          <h3>CURRENT CHAPTER</h3>
          <span>{this.props.book.currentChap}</span>
          <button type="button">UPDATE PROGRESS</button>
        </div>
      </div>
    );
  }
}
