import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./quantityButton.styles.css";

interface Props {
  quantity: number;
}

export const QuantityButton: React.FC<Props> = ({ quantity }) => {
  const [edit, setEdit] = useState(false);

  return edit ? (
    <div className="button_quantity-container">
      <button className="delete">
        <DeleteOutlineOutlinedIcon />
      </button>
      <button className="addOrLess">
        <RemoveIcon />
      </button>
      <button className="button_quantity" onClick={() => setEdit(false)}>{quantity} pcs</button>
      <button className="addOrLess">
        <AddIcon />
      </button>
    </div>
  ) : (
    <button className="button_quantity" onClick={() => setEdit(true)}>{quantity} pcs</button>
  );
};
