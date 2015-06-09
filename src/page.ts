import React = require('react')

interface Props {}
interface State {}

export default class Page extends React.Component<Props, State> {
  render () {
    /**
     * Uses ts-jsx-loader to compile the below jsx string to js (ts is a superset of js)
     * So the resulting code is then type checked by tsc so you will still get
     * typing in the below jsx just not in your editor
     */
    return React.jsx(`
      <h1>Hello, World</h1>
    `)
  }
}
