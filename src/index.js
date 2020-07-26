import React from 'react';
import ReactDOM from 'react-dom';
import Router from './router';
import './index.css';
import { configureFakeBackend } from './utils/configureFakeBackend';

configureFakeBackend();
ReactDOM.render(
  <Router />,
  document.getElementById('root')
);

