import React from "react";
import Rating from "@material-ui/lab/Rating";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

type textInputType = {
  hasTextInput: boolean | undefined;
  saveComment: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

type checkBoxDataType = {
  addCheckBox: boolean | undefined;
  isChecked: boolean | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type ratingComponentOpts = {
  title: string;
  description: string;
  questionId: string;
  currentValue: string | null | undefined;
  onChangeEvent: (e: any) => void;
  textInput?: textInputType;
  checkBoxData?: checkBoxDataType;
};

export default function RatingComponent(m: ratingComponentOpts) {
  return (
    <div>
      <Container component={Box}>
        <Box p={2} component={Paper} alignItems="center">
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
          <Rating
            name={m.questionId}
            value={Number(m.currentValue)}
            size="large"
            onChange={m.onChangeEvent}
          />
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
