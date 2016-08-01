import 'babel-polyfill'
import { Promise } from 'bluebird'
import babelPromise from 'babel-runtime/core-js/promise'
babelPromise.default = Promise;

import React from 'react'
import { render  } from 'react-dom'
// import App from './components/App'

console.log(Promise);
console.log(fetch);

render(
  (<div> test </div>),
  document.getElementById('root')
)
