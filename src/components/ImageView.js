import React from 'react';
import Image from './Image';
import { connect } from 'react-redux';

const ImageView = (props) => {
  const image = props.images[parseInt(props.match.params.id, 10)]
  if (!image) {
    return <div>Image not found</div>
  }

  return (
    <div>
      <h1>{image.title}</h1>
      <Image color={image.color} />
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    images: state.imagesReducer.images
  }
}

export default connect(mapStateToProps, null)(ImageView);