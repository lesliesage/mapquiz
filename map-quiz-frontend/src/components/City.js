import React, { Component } from "react";

class City extends Component {
  state = {};
  render() {
    return (
    <div>City Component Here
      {this.props.currentCity ?
      <h4>Where is {this.props.currentCity.name}?</h4> : null
      }
    </div>
    )
    
  }
}

export default City;
