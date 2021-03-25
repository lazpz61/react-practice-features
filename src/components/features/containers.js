import Moment from "moment";
import React, { Component } from "react";



export default class FeatureContainer extends Component {
    constructor() {
        super();

        this.state = {
            name: "Lazaro Perez",
            email: "lazpz617@yahoo.com",
            city: "Manhattan",
        }
    }
    render(){
        return(

            <div>
                <h1>My name is {this.state.name}</h1>
                <h1>My email address is {this.state.email}</h1>
                <h1>I was born in the city of {this.state.city}</h1>
            </div>
        );
    }
}


