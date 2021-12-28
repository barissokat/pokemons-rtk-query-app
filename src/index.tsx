import React from 'react';
import { render } from 'react-dom'
import { ApiProvider } from '@reduxjs/toolkit/query/react'

import './index.css';

import App from './App';
import { pokemonApi } from './services/pokemon'

const rootElement = document.getElementById('root')
render(
  <ApiProvider api={pokemonApi}>
    <App />
  </ApiProvider>,
  rootElement
)
