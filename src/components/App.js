import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link
} from 'react-router-dom';

import Routes from '../router';


class ModalSwitch extends Component {

  // We can pass a location to <Switch/> that will tell it to
  // ignore the router's current location and use the location
  // prop instead.
  //
  // We can also use "location state" to tell the app the user
  // wants to go to `/img/2` in a modal, rather than as the
  // main page, keeping the gallery visible behind it.
  //
  // Normally, `/img/2` wouldn't match the gallery at `/`.
  // So, to get both screens to render, we can save the old
  // location and pass it to Switch, so it will think the location
  // is still `/` even though its `/img/2`.
  
  previousLocation = null;

  componentWillUpdate(nextProps) {
    const { location } = this.props
    // set previousLocation if props.location is not modal
    if (
      nextProps.history.action !== 'POP' && location &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = location
    }
  }

  render() {
    const { location } = this.props;
    const isModal = !!(
      location && location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )
    
    return (
      <div>
        <Routes isModal = {isModal} previousLocation={this.previousLocation} location={this.props.location} />
      </div>
    )
  }
}

const ModalGallery = () => (
  <Router>
    <Route component={ModalSwitch} />
  </Router>
)

export default ModalGallery
