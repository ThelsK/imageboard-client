import React from "react"
import { connect } from "react-redux"
import ImageList from "./components/ImageList"
import LoginForm from "./components/LoginForm"
import CreateForm from "./components/CreateForm"

class App extends React.Component {
  render() {
    return (
      <div>
        <ImageList />
        {!this.props.user
          ? <LoginForm />
          : <CreateForm />
        }
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
})

export default connect(mapStateToProps)(App)