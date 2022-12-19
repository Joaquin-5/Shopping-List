import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React from "react";

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  openDialog: boolean;
  setOpenDialog: React.Dispatch<React.SetStateAction<boolean>>;
  title: string;
  description?: string;
}

export const CustomAlert: React.FC<Props> = ({
  onClick,
  openDialog,
  setOpenDialog,
  title,
  description,
}) => {
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <Dialog
      open={openDialog}
      onClose={handleCloseDialog}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {description}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog}>Disagree</Button>
        <Button onClick={onClick} autoFocus color="error" variant="contained">
          Agree
        </Button>
      </DialogActions>
    </Dialog>
  );
};
