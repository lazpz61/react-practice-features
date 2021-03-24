import React, { Component } from 'react';
import moment from "moment";

import FeatureContainer from "./features/containers";



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>Features Practice</h1>
        <div>Todays date is {moment().format("MMMM Do YYYY")}</div>
        
        <h1>This will be where my list for quesitons and the inputs will be</h1>
      </div>
    );
  }
}
