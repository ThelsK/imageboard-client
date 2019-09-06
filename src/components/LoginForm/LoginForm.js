import React from "react"

class LoginForm extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Email Address:
          <input
            name="email"
            type="text"
            value={this.props.values.title}
            placeholder="Enter your email..."
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Password:
          <input
            name="password"
            type="text"
            value={this.props.values.url}
            placeholder="Enter your password..."
            onChange={this.props.onChange}
          />
        </label>
        <button>
          Login
        </button>
      </form>
    )
  }
}

export default LoginForm