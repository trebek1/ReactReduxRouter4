'use strict'

// Libs
import React from 'react'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

import Home from '../components/Home';
import Gallery from '../components/Gallery';
import ImageView from '../components/ImageView';
import Modal from '../components/Modal';
import Invalid from '../components/Invalid';
import Alex from '../components/Alex';

const Routes = (props) => (
  <div>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/gallery' component={Gallery}/>
      <Route path='/img/:id' component={ImageView}/>
       <Route path='/alex' component={Alex}/>
      <Route component={Invalid}/>
    </Switch>
    {props.isModal ? <Route path='/img/:id' component={Modal} /> : null}
  </div>
)

export default Routes