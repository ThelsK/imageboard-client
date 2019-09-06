import React from "react"
import { connect } from "react-redux"
import { login } from "../../actions/user"
import LoginForm from "./LoginForm"

class LoginFormContainer extends React.Component {
  state = {
    email: "",
    password: "",
  }

  onChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    })

  onSubmit = event => {
    event.preventDefault()
    this.props.login(this.state)
  }

  render() {
    return (
      <LoginForm
        values={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapDispatchToProps = {
  login,
}

export default connect(null, mapDispatchToProps)(LoginFormContainer)