import React from "react"
import { connect } from "react-redux"
import { getImages } from "../../actions/images"
import ImageList from './ImageList'

class ImageListContainer extends React.Component {
  componentDidMount() {
    this.props.getImages()
  }

  render() {
    if (!this.props.images.length) {
      return "Loading..."
    }
    return <ImageList images={this.props.images} />
  }
}

const mapStateToProps = state => ({
  images: state.images,
})

const mapDispatchToProps = {
  getImages,
}

export default connect(mapStateToProps, mapDispatchToProps)(ImageListContainer)