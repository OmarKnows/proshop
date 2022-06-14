import React from 'react'
import ReactDOM from 'react-dom/client'
import './bootstrap.min.css'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './store'

axios.defaults.baseURL = 'http://localhost:5000/'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)

reportWebVitals()
