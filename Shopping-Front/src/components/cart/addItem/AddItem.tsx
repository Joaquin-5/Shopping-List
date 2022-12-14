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
import { CustomAlert } from "../../alert/Alert";
import "./addItem.styles.css";

interface Props {
  setCartState: React.Dispatch<
    React.SetStateAction<"addItem" | "default" | "detailItem">
  >;
}

interface cboOptions {
  id: string;
  label: string;
}

export const AddItem: React.FC<Props> = ({ setCartState }) => {
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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className="addItem-container">
      <h1 className="title-addItem">Add a new item</h1>
      <form className="form-addItem" onSubmit={handleSubmit}>
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
                    border: "2px solid #BDBDBD",
                  },
                  "& fieldset:hover": {
                    borderColor: "#F9A109 !important",
                  },
                }}
              />
            )}
            componentsProps={{
              paper: {
                sx: {
                  fontSize: "1.2rem",
                  borderRadius: "12px",
                  marginTop: "20px",
                  fontWeight: "bold",
                  padding: "1rem",
                  fontFamily: "'Quicksand', sans-serif",
                  "& > *": {
                    borderRadius: "12px",
                  },
                  "& > *:hover": {},
                },
              },
            }}
          />
          <label htmlFor="" className="label">
            Category
          </label>
        </div>
        <div className="submit-cancel">
          <button
            className="cancel-button"
            type="button"
            onClick={() => setOpenDialog(true)}
          >
            cancel
          </button>
          <input type="submit" value="Save" className="submit-button" />
        </div>
      </form>
      <CustomAlert
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        title={"Are you sure you wanna cancel?"}
        description={"You will loose all the information."}
        onClick={() => {
          setOpenDialog(false);
          setCartState("default");
        }}
      />
    </div>
  );
};
