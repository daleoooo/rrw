import 'babel-polyfill'
import 'whatwg-fetch'
import { Promise  } from 'bluebird'
import babelPromise from 'babel-runtime/core-js/promise'
babelPromise.default = Promise;

import React from 'react'
import { render } from 'react-dom'

render(
  (<div> test </div>),
    document.getElementById('root')
)
