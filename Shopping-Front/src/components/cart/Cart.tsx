import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box } from "@mui/material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { deleteItemCart, editQuantityItem } from "../../store/cart";
import { ItemButton } from "../itemButton";
import { AddItem } from "./addItem/AddItem";
import "./cart.styles.css";
import { QuantityButton } from "./quantityButton";

export const Cart = () => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const [addItem, setAddItem] = useState(false);

  return (
    <>
      {!addItem ? (
        <div className="cart-container" id="shopping-list">
          <div className="additem-container">
            <div className="image-container">
              <img src="source.svg" alt="imagen botella" />
            </div>
            <div className="info-container">
              <h3 className="titulo-secundario">Didn’t find what you need?</h3>
              <ItemButton
                text="Add item"
                onClick={() => setAddItem(true)}
                icon={false}
              />
            </div>
          </div>
          <div className="item-container">
            {items.length === 0 ? (
              <Box className="noItem-container">
                <h3>No items</h3>
                <img
                  src="./undraw_shopping_app_flsj1.svg"
                  alt="no items image"
                  className="noItem-image"
                />
              </Box>
            ) : (
              <>
                <h1>Shopping list</h1>
                {items.map((c) => (
                  <div className="item-list" key={c._id}>
                    <h2>{c.name}</h2>
                    {c.items.map((i) => (
                      <div className="item" key={i._id}>
                        <p className="item-title">{i.name}</p>
                        <QuantityButton
                          quantity={i.quantity}
                          onQuantityChange={(quantity) => {
                            dispatch(editQuantityItem({ ...i, quantity }));
                          }}
                          onDeleteItem={() => {
                            dispatch(deleteItemCart(i));
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ))}
              </>
            )}
          </div>
          <div className="search-container">
            <div
              className={`input-container ${
                items.length < 1 ? "input-container-disabled" : ""
              }`}
            >
              <input
                type="text"
                className="input-text"
                placeholder="Enter a name"
                disabled={items.length < 1}
              />
              <input
                type="submit"
                value="Save"
                className="input-submit"
                disabled={items.length < 1}
              />
            </div>
          </div>
        </div>
      ) : (
        <AddItem setAddItem={setAddItem} />
      )}
    </>
  );
};
