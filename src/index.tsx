import { render } from 'react-dom'
import { ApiProvider } from '@reduxjs/toolkit/query/react'
import { pokemonApi } from './services/pokemon'

import App from './App';

import './index.css';

const rootElement = document.getElementById('root')
render(
  <ApiProvider api={pokemonApi}>
    <App />
  </ApiProvider>,
  rootElement
)
