import React, { Component } from 'react';
import moment from "moment";
import axios from "axios";

import FeatureContainer from "./features/containers";
import NameForm from "./features/name-form";
import  Logo from "./features/logo-component";
import CrmPositions from "./features/drop-down-functions";
import Counter from "./features/increment";
import Counting from "./features/counter";



export default class App extends Component {


    constructor() {
      super();


      this.state = {
        data: []
      };

    } 
  getPortfolioItems(){
    axios.get()
  .then( response => {
    // handle success
    this.setState({
      data: response.data.portfolio_items
    })
  })
  .catch(error => {
    // handle error
    console.log(error);
  })
  .then( () => {
    // always executed
  });
  }

  portfolioItems() {

    return this.state.data.map(item => {
      return <PortfolioItem key={item.id} item={item}/>;
    });
  }

  componentDidMount(){
    this.getPortfolioItems();
  }




  render() {
    return (
      <div className='app'>
        <Logo />
        <h1>Features Practice I need to more practice on each part of React</h1>
        <div>Todays date is {moment().format("MMMM Do YYYY")}</div>
        <NameForm />
        <h1>This will be where my list for questions and the inputs will be</h1>
        <FeatureContainer />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <h1>Drop Down List</h1>
        <CrmPositions />
        <hr />
        <Counter />
        <hr />
        <Counting />


      </div>
    );
  }
}
