import express = require('express')
import React = require('react')
import Page from './page'

const app = express()

/**
 * Server client/app.js
 */
app.use(express.static('.'));


/**
 * Isomorphic HTML endpoint
 */
app.get('/', function (req, res) {
  const content = React.renderToString(React.jsx(`
    <Page/>
  `))
  res.end(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>react typescript</title>
    </head>
    <body>
      <div id="app">${content}</div>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/react/0.13.3/react.min.js"></script>
      <script src="/prod/app.js"></script>
    </body>
    </html>
  `)
})

/**
 * JSON API
 */
app.get('/api/foo/bar', function (req, res) {
  res.end('TODO: JSON API')
})

app.listen(3000)
