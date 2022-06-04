import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
  state = {
    book: '',
    author: '',
  }

  ChangeInput = (e) => {
    const theBook = e.target.name;
    if (theBook === 'Author') {
      this.setState({
        author: e.target.value,
      });
    } else if (theBook === 'Add book') {
      this.setState({
        book: e.target.value,
      });
    }
  }

  render() {
    return (
      <div>
        <Input name="Add book" enterBook={this.ChangeInput} />
        <Input name="Author" enterBook={this.ChangeInput} />
        <button type="submit" onClick={() => { this.props.addBook(this.state); }}>Add Book</button>
      </div>
    );
  }
}
