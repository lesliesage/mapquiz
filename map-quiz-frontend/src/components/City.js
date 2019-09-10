import React, { Component } from "react";
import {Button, Container} from 'semantic-ui-react'

const City = (props) => {
    return (
      <Container id="city">
        {props.currentCity ?
        <h4>Question {props.cityIndex + 1} of 20: Where is {props.currentCity.name}?</h4> : null
        }
        {props.nextButton? <Button onClick={props.nextQuest}>Next Q</Button> : null}
      </Container>
    )
}

export default City;
