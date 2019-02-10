import { Provider } from 'react-redux'
import { createStore } from 'redux'
import React from 'react'
import ReactDOM from 'react-dom'
import reducer from './reducers'
import middleware from './middleware'
//import { BrowserRouter as Router } from 'react-router-dom'

import App from './components/App'

const store = createStore(reducer, middleware)

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById('root'));

