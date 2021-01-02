import React from "react";
import { ListItem, ListItemText } from "@material-ui/core";

function Todo({ todo }) {
  return (
    <ListItem>
      <ListItemText primary={todo} secondary="some dummy data" />
    </ListItem>
  );
}

export default Todo;
