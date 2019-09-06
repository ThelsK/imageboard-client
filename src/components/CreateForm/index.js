import React from "react"
import { connect } from "react-redux"
import { createImage } from "../../actions/images"
import CreateForm from "./CreateForm"

class CreateFormContainer extends React.Component {
  state = {
    title: "",
    url: "",
  }

  onChange = event =>
    this.setState({
      [event.target.name]: event.target.value
    })

  onSubmit = event => {
    console.log("About to Submit!")
    event.preventDefault()
    this.props.createImage(this.state)
    this.setState({
      title: "",
      url: "",
    })
  }

  render() {
    return (
      <CreateForm
        values={this.state}
        onChange={this.onChange}
        onSubmit={this.onSubmit}
      />
    )
  }
}

const mapDispatchToProps = {
  createImage,
}

export default connect(null, mapDispatchToProps)(CreateFormContainer)