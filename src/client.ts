/**
 * App entry point
 */

// Stylesheets
require('./stylesheet')

// Libraries
import React = require('react')
import Page from './page'

// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app'

React.render(
  React.jsx(`<Page />`),
  document.getElementById(DOM_APP_EL_ID)
)
