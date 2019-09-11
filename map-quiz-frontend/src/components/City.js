import React from "react";
import { Button, Grid } from "semantic-ui-react";

const City = props => {
  return (
    <Grid id="city">
      <Grid.Row id='city-row' columns={3}>
        <Grid.Column textAlign="right">
          {props.currentCity ? (
            <h2>Question {props.cityIndex + 1} of 20:</h2>
          ) : null}
        </Grid.Column>
        <Grid.Column textAlign="left">
          {props.currentCity ? (
            <h2>Where is {props.currentCity.name}?</h2>
          ) : null}
        </Grid.Column>
        <Grid.Column textAlign="left" id='next-button'>
          {props.nextButton ? (
            <Button color={'green'} onClick={props.nextQuest}>Next Q</Button>
          ) : null}
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
};

export default City;
