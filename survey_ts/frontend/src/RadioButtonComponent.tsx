import React from "react";
import RadioGroup from "@material-ui/core/RadioGroup";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import "./App.css";

type textInputType = {
  hasTextInput: boolean | undefined;
  saveComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type checkBoxDataType = {
  addCheckBox: boolean | undefined;
  isChecked: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type radioButtonProps = {
  title: string;
  description: string;
  questionId: string;
  questionValueExpr: string | null | undefined;
  onChangeEvent: (e: React.ChangeEvent<HTMLInputElement>) => void;
  radioOpts: any[];
  textInput?: textInputType;
  checkBoxData?: checkBoxDataType;
};

export default function RadioButtonComponent(m: radioButtonProps) {
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
          {m.checkBoxData && m.checkBoxData.addCheckBox ? (
            <div>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={m.checkBoxData.isChecked}
                    onChange={m.checkBoxData.onChange}
                    name={m.questionId}
                    color="primary"
                  />
                }
                label="Пропустить данный вопрос"
              />
              <br></br>
            </div>
          ) : (
            ""
          )}
          <label>
            <RadioGroup
              aria-label="radio"
              name={m.questionId}
              value={m.questionValueExpr}
              onChange={m.onChangeEvent}
            >
              {m.radioOpts}
            </RadioGroup>
          </label>
          {m.textInput && m.textInput.hasTextInput ? (
            <TextField
              name={m.questionId}
              label="Комментарий"
              fullWidth
              margin="normal"
              InputLabelProps={{
                shrink: true,
              }}
              onChange={m.textInput.saveComment}
            />
          ) : (
            ""
          )}
        </Box>
      </Container>
      <br></br>
    </div>
  );
}
