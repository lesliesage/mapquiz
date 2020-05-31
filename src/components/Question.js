import React from "react";
import { Grid } from "semantic-ui-react";

const Question = (props) => {
  return (
    <Grid.Row columns={2}>
      <Grid.Column>
        {props.index + 1}: {props.question.city.name},{" "}
        {props.question.city.country}
      </Grid.Column>
      <Grid.Column>
        Off by: {props.question.distance.toFixed(1)} km
      </Grid.Column>
    </Grid.Row>
  );
};

export default Question;
