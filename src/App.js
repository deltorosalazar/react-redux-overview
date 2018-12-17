import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateUser, apiRequest } from './actions/userActions'
import './App.css'

class App extends Component {
  constructor(props) {
    super(props)

    this.onUpdateUser = this.onUpdateUser.bind(this)
  }

  onUpdateUser() {
    this.props.onUpdateUser('Sammy')
  }

  componentWillMount() {
    this.props.onApiRequest()
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

const mapStateToProps = (state, props) => ({
  products: state.products,
  user: state.user,
  userPlusProp: `${state.user} + ${props.randomProp}`
})

const mapActionToProps = {
  onUpdateUser: updateUser,
  onApiRequest: apiRequest
}

export default connect(
  mapStateToProps,
  mapActionToProps
)(App)
