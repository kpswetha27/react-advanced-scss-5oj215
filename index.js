import React, { Component } from 'react';
import { render } from 'react-dom';
import Profile from './components/Profile';
import './style.scss';

const App = () => (
  <div>
    <Profile />
  </div>
);

render(<App />, document.getElementById('root'));
