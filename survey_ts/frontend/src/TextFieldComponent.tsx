import React from "react";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

export type textFieldComponentOpts = {
    title: string,
    description: string,
    id: string,
    onCommentChange: (e: any) => void,
};

export default function TextFieldComponent(m: textFieldComponentOpts) {
  return (
    <div>
      <Container component={Box}>
        <Box p={2} component={Paper}>
          <Typography variant="h4" align="left">
            {m.title}
          </Typography>
          <Typography variant="h5" align="left">
            {m.description}
          </Typography>
          <TextField
            name={m.id}
            label="Комментарий"
            fullWidth
            margin="normal"
            InputLabelProps={{
              shrink: true,
            }}
            onChange={m.onCommentChange}
          />
        </Box>
      </Container>
      <br></br>
    </div>
  );
};
