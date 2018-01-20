import React from 'react';
import { connect } from 'react-redux';
import Thumbnail from './Thumbnail';
import { Link } from 'react-router-dom';

const Gallery = (props) => (
  <div>
    {props.images.map(i => (
      <Link
        key={i.id}
        to={{
          pathname: `/img/${i.id}`,
          // this is the trick!
          state: { modal: true }
        }}
      >
        <Thumbnail color={i.color} />
        <p>{i.title}</p>
      </Link>
    ))}
  </div>
)

const mapStateToProps = (state, ownProps) => {
  return {
    images: state.imagesReducer.images
  }
}

export default connect(mapStateToProps, null)(Gallery);