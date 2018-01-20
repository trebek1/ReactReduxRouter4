import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { clickHandler } from '../actions';
  
class Alex extends Component {
  
  render(){
    return (
      <div id="clicker" onClick={ this.props.clickHandler }> Click Here! { this.props.count }</div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return { count: state.countReducer };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    clickHandler
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Alex);

