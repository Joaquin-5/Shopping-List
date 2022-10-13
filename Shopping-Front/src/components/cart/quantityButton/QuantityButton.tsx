import React, { useState } from "react";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import "./quantityButton.styles.css";

interface Props {
  quantity: number,
  onQuantityChange: (quantity: number) => void,
  onDeleteItem: () => void
}

export const QuantityButton: React.FC<Props> = ({ quantity, onQuantityChange, onDeleteItem }) => {
  const [edit, setEdit] = useState(false);


  return edit ? (
    <div className="button_quantity-container">
      <button className="delete" onClick={(e) => onDeleteItem()}>
        <DeleteOutlineOutlinedIcon />
      </button>
      <button className="addOrLess" onClick={(e) => onQuantityChange(Math.max(quantity-1, 1))}>
        <RemoveIcon />
      </button>
      <button className="button_quantity" onClick={() => setEdit(false)}>{quantity} pcs</button>
      <button className="addOrLess" onClick={(e) => onQuantityChange(quantity+1)}>
        <AddIcon />
      </button>
    </div>
  ) : (
    <button className="button_quantity" onClick={() => setEdit(true)}>{quantity} pcs</button>
  );
};
