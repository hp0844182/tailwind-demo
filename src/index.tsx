import React from 'react'
import ReactDom from 'react-dom'
import App from './app'
import './index.css'
import { tailConfig } from './tailconfig'
console.log(tailConfig)
ReactDom.render(<App />, document.getElementById('root'))
