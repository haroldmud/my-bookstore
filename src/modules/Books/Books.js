import React, { Component } from 'react';
import Book from './Book';
import Form from '../form/Form';

export default class Books extends Component {
  state = {
    books: [
      {
        id: 1, title: 'Elite', currentChap: 'Part 1', Author: 'Harold', Completed: '55', type: 'drama',
      },
      {
        id: 2, title: 'Conjuring', currentChap: 'Part 4', Author: 'Arnold', Completed: '50', type: 'horror',
      },
    ],
  }

  addBook = (book) => {
    const newTodo = {
      id: this.state.books.length + 1, title: book.book, currentChap: 'Chap 1', Author: book.author, Completed: '0', type: 'action',
    };
    this.setState({
      books: [...this.state.books, newTodo],
    });
    console.log('new', this.state.books);
  }

  render() {
    return (
      <div>
        {this.state.books.map((book) => (
          <Book key={book.id} book={book} />
        ))}
        <Form addBook={this.addBook} />
      </div>
    );
  }
}
