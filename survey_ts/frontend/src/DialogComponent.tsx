import React from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

type textFieldDataType = {
  id: string;
  label: string;
  value: string;
  error: boolean;
  textOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type dialogComponentOpts = {
  openState: boolean;
  closeEvent: (e: any) => void;
  title: string;
  description: string;
  buttonOnClick: (e: any) => void;
  buttonText: string;
  textFieldData?: textFieldDataType;
  secondDescription?: string;
};

export default function DialogComponent(m: dialogComponentOpts) {
  return (
    <Dialog
      open={m.openState}
      onClose={m.closeEvent}
      aria-labelledby="form-dialog-title"
    >
      <DialogTitle id="form-dialog-title">{m.title}</DialogTitle>
      <DialogContent>
        <DialogContentText>{m.description}</DialogContentText>
        {m.secondDescription && m.secondDescription.length ? (
          <DialogContentText>{m.secondDescription}</DialogContentText>
        ) : (
          ""
        )}
        {m.textFieldData ? (
          <TextField
            autoFocus
            margin="dense"
            id={m.textFieldData.id}
            label={m.textFieldData.label}
            fullWidth
            value={m.textFieldData.value}
            onChange={m.textFieldData.textOnChange}
            helperText={m.textFieldData.error ? "Неверный ввод" : ""}
            error={m.textFieldData.error}
          />
        ) : (
          ""
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={m.buttonOnClick} color="primary">
          {m.buttonText}
        </Button>
      </DialogActions>
    </Dialog>
  );
}
