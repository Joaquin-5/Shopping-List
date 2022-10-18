import {
  Autocomplete,
  Box,
  createStyles,
  makeStyles,
  TextField,
} from "@mui/material";
import React from "react";
import "./addItem.styles.css";

const options = ["Option 1", "Option 2"];

export const AddItem = () => {
  const [value, setValue] = React.useState<string | null>(options[0]);
  const [inputValue, setInputValue] = React.useState("");

  return (
    <div className="addItem-container">
      <h1 className="title-addItem">Add a new item</h1>
      <form action="" className="form-addItem">
        <div className="field-container">
          <label htmlFor="" className="label">
            Name
          </label>
          <input
            type="text"
            className="field input"
            placeholder="Enter a name"
          />
        </div>
        <div className="field-container">
          <label htmlFor="" className="label">
            Note (optional)
          </label>
          <textarea
            name=""
            id=""
            placeholder="Enter a note"
            className="field textarea"
          ></textarea>
        </div>
        <div className="field-container">
          <label htmlFor="" className="label">
            Image (optional)
          </label>
          <input
            type="text"
            className="field input"
            placeholder="Enter a url"
          />
        </div>
        <div className="field-container">
          <label htmlFor="" className="label">
            Category
          </label>
          <Autocomplete
            value={value}
            onChange={(event: any, newValue: string | null) => {
              setValue(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={options}
            sx={{ width: 240, borderRadius: "12px" }}
            renderInput={(params) => (
              <TextField {...params} placeholder="Enter a category" sx={{borderRadius: '12px'}}/>
            )}
            componentsProps={{
              paper: {
                sx: {
                  borderRadius: "12px",
                  marginTop: "20px",
                  fontWeight: 'bold',
                  padding: '1rem',
                  fontFamily: "'Quicksand', sans-serif",
                  '& > *': {
                    
                  },
                  '& > *:hover': {
                    
                    borderRadius: "12px",
                  }
                },
              },
            }}
          />
        </div>
        <div className="submit-cancel">
          <button className="cancel-button">cancel</button>
          <input type="submit" value="Save" className="submit-button" />
        </div>
      </form>
    </div>
  );
};
