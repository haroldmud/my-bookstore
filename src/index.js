import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Books from './modules/Books/Books';
import Categories from './modules/Categories';
import Header from './modules/Header';

const root = ReactDOM.createRoot(document.getElementById('root'));
const links = [
  { status: false, link: '../categories' },
  { status: true, link: '../' },
];
root.render(
  <BrowserRouter>
    <Header obj={links} />
    <Routes>
      <Route path="/" element={<Books />} />
      <Route path="categories" element={<Categories />} />
    </Routes>
  </BrowserRouter>,
);
