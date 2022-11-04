import {
  Autocomplete,
  Box,
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  makeStyles,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { shoppingApi } from "../../../api";
import { Category } from "../../../interfaces";
import { RootState } from "../../../store";
import "./addItem.styles.css";

interface Props {
  setAddItem: React.Dispatch<React.SetStateAction<boolean>>;
}

interface cboOptions {
  id: string;
  label: string;
}

export const AddItem: React.FC<Props> = ({ setAddItem }) => {
  // const [inputValue, setInputValue] = React.useState("");
  const [openDialog, setOpenDialog] = React.useState(false);
  const { categories } = useSelector((state: RootState) => state.data);
  const [options, setOptions] = useState<cboOptions[]>([]);
  // const [value, setValue] = React.useState<string | null>(options[0].label);

  useEffect(() => {
    if (categories.length === 0) {
      shoppingApi.get("categories").then((res) => {
        let cboCategoryOption: cboOptions[] = [];
        console.log(res.data);

        res.data.map((c: Category) => {
          cboCategoryOption.push({
            id: c._id,
            label: c.name,
          });
          return c;
        });
        setOptions(cboCategoryOption);
      });
    } else {
      let cboCategoryOption: cboOptions[] = [];
      categories.map((c: Category) => {
        cboCategoryOption.push({
          id: c._id,
          label: c.name,
        });
        return c;
      });
      setOptions(cboCategoryOption);
    }
  }, []);

  const handleClickOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  return (
    <div className="addItem-container">
      <h1 className="title-addItem">Add a new item</h1>
      <form action="" className="form-addItem">
        <div className="field-container">
          <input
            type="text"
            className="field input"
            placeholder="Enter a name"
          />
          <label htmlFor="" className="label">
            Name
          </label>
        </div>
        <div className="field-container">
          <textarea
            name=""
            id=""
            placeholder="Enter a note"
            className="field textarea"
          ></textarea>
          <label htmlFor="" className="label">
            Note (optional)
          </label>
        </div>
        <div className="field-container">
          <input
            type="text"
            className="field input"
            placeholder="Enter a url"
          />
          <label htmlFor="" className="label">
            Image (optional)
          </label>
        </div>
        <div className="field-container">
          <Autocomplete
            /* value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
            }} */
            // inputValue={inputValue}
            /* onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }} */
            id="controllable-states-demo"
            options={options}
            isOptionEqualToValue={(option, value) =>
              option.label === value.label
            }
            sx={{ sm: "width: 240", md: "width:360" }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Enter a category"
                sx={{
                  "& fieldset": {
                    borderRadius: "12px",
                  },
                  ".MuiOutlinedInput-root": {
                    "&:focus": {
                      borderColor: "#F9A109 !important",
                    },
                  },
                }}
              />
            )}
            componentsProps={{
              paper: {
                sx: {
                  borderRadius: "12px",
                  marginTop: "20px",
                  fontWeight: "bold",
                  padding: "1rem",
                  fontFamily: "'Quicksand', sans-serif",
                  "& > *": {},
                  "& > *:hover": {
                    borderRadius: "12px",
                  },
                },
              },
            }}
          />
          <label htmlFor="" className="label">
            Category
          </label>
        </div>
        <div className="submit-cancel">
          <button className="cancel-button" onClick={handleClickOpenDialog}>
            cancel
          </button>
          <input type="submit" value="Save" className="submit-button" />
        </div>
      </form>
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you sure you wanna cancel?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            You will louse all the information.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Disagree</Button>
          <Button
            onClick={() => {
              handleCloseDialog();
              setAddItem(false);
            }}
            autoFocus
            color="error"
            variant="contained"
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
