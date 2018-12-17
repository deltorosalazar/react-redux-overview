import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser } from './actions/userActions'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser() {
    this.props.onUpdateUser('Sammy')
  }

  render() {
    console.log(this.props)

    return (
      <div className="App">
        <h1>React + Redux</h1>
        <button onClick={this.onUpdateUser}>Update User</button>
        <h3>User: {this.props.user}</h3>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  products: state.products,
  user: state.user
})

const mapActionToProps = {
  onUpdateUser: updateUser
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(App)
