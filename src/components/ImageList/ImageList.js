import React from "react"

class ImageList extends React.Component {
  render() {
    return (
      <div>
        {this.props.images.map(image =>
          <div key={image.id}>
            <h3>{image.title}</h3>
            <img src={image.url} alt={image.title} />
          </div>
        )}
      </div>
    )
  }
}

export default ImageList