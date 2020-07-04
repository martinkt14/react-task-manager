import React from "react";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const Task = (props) => {
  return (
    <Card>
      <CardContent>
        <Typography color="textSecondary" gutterBottom>
          {props.title}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Task;
