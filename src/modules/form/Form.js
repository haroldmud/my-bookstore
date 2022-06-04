import React, { Component } from 'react';
import Input from './Input';

export default class Form extends Component {
  state = {
    book: '',
    author: '',
  }

  ChangeInput = (e) => {
    const X = e.target.name;
    if (X === 'Author') {
      this.setState({
        author: e.target.value,
      });
    } else if (X === 'Add book') {
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
