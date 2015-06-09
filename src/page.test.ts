import React = require('react')
import ReactAddons = require('react/addons')
import assert = require('assert')
import Page from './page'

const {TestUtils} = ReactAddons.addons

describe('Page', function () {
  it('should say hello world', function () {
    let component = TestUtils.renderIntoDocument(
      React.jsx(`<Page/>`)
    )
    const h1 = TestUtils.findRenderedDOMComponentWithTag(component, 'h1')
    assert(h1.props.children === 'Hello, World')
  })

})
