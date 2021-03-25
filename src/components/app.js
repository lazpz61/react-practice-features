import React, { Component } from 'react';
import moment from "moment";

import FeatureContainer from "./features/containers";
import NameForm from "./features/name-form";
import  {} from "./features/functionalcomp";



export default class App extends Component {
  render() {
    return (
      <div className='app'>
        
        <h1>Features Practice I need to more practice on each part of React</h1>
        <div>Todays date is {moment().format("MMMM Do YYYY")}</div>
        <NameForm />
        <h1>This will be where my list for questions and the inputs will be</h1>
        <FeatureContainer />

      </div>
    );
  }
}
