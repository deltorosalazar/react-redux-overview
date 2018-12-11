import React, { Component } from 'react'
import { connect } from 'react-redux'
import './App.css'

class App extends Component {
  render() {
    console.log(this.props)

    return (
      <div className="App">
        <h1>React + Redux</h1>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
})

export default connect(mapStateToProps)(App)
