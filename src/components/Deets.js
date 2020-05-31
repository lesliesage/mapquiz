import React from "react";
import { Grid } from "semantic-ui-react";
import Question from "./Question.js";

const Deets = (props) => {
  return (
    <Grid id="deets">
      {props.game
        ? props.game.questions.map((question, index) => (
            <Question key={question.id} question={question} index={index} />
          ))
        : null}
    </Grid>
  );
};

export default Deets;
