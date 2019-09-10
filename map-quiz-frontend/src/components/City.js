import React, { Component } from "react";
import {Button} from 'semantic-ui-react'

class City extends Component {
  state = {};
  render() {
    return (
    <div>
      {this.props.currentCity ?
      <h4>Where is {this.props.currentCity.name}?</h4> : null
      }
      {this.props.nextButton? <Button onClick={this.props.nextQuest}>Next Q</Button> : null}
    </div>
    )
    
  }
}

export default City;
