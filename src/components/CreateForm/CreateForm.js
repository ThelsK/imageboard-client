import React from "react"

class ImageList extends React.Component {
  render() {
    return (
      <form onSubmit={this.props.onSubmit}>
        <label>
          Image Title:
          <input
            name="title"
            type="text"
            value={this.props.values.title}
            placeholder="Enter a title..."
            onChange={this.props.onChange}
          />
        </label>
        <label>
          Image URL:
          <input
            name="url"
            type="text"
            value={this.props.values.url}
            placeholder="Enter a URL..."
            onChange={this.props.onChange}
          />
        </label>
        <button>
          Add
        </button>
      </form>
    )
  }
}

export default ImageList