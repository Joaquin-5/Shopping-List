import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import { Box, IconButton } from "@mui/material";
import { SetStateAction, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import { cleanCart, deleteItemCart, editQuantityItem } from "../../store/cart";
import { startAddToList } from "../../store/history";
import { CustomAlert } from "../alert/Alert";
import { ItemButton } from "../itemButton";
import { ItemsDetails } from "../itemDetails/ItemsDetails";
import { AddItem } from "./addItem/AddItem";
import "./cart.styles.css";
import { QuantityButton } from "./quantityButton";

interface Props {
  cartState: "addItem" | "default" | "detailItem";
  setCartState: React.Dispatch<
    React.SetStateAction<"addItem" | "default" | "detailItem">
  >;
}

export const Cart: React.FC<Props> = ({ cartState, setCartState }) => {
  const { items } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  const [nameList, setNameList] = useState("");
  const [openDialog, setOpenDialog] = useState(false);

  return (  
    <>
      {cartState === "default" ? (
        <div className="cart-container" id="shopping-list">
          <div className="additem-container">
            <div className="image-container">
              <img src="source.svg" alt="imagen botella" />
            </div>
            <div className="info-container">
              <h3 className="titulo-secundario">Didn’t find what you need?</h3>
              <ItemButton
                text="Add item"
                onClick={() => setCartState("addItem")}
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
                <div className="deleteCart">
                  <h1>Shopping list</h1>
                  <IconButton
                    className="delete-button"
                    onClick={() => setOpenDialog(true)}
                    size="small"
                  >
                    <DeleteOutlineOutlinedIcon color="error"/>
                  </IconButton>
                </div>
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
                onChange={(e) => setNameList(e.target.value)}
                value={nameList}
              />
              <input
                type="button"
                value="Save"
                className="input-submit"
                disabled={items.length < 1 || nameList.length < 1}
                onClick={() => {
                  dispatch(startAddToList(nameList, items!) as any);
                  dispatch(cleanCart());
                  setNameList("");
                }}
              />
            </div>
          </div>
          <CustomAlert
            openDialog={openDialog}
            setOpenDialog={setOpenDialog}
            title={"Are you sure you want to delete all items on the cart?"}
            onClick={() => {
              dispatch(cleanCart());
              setOpenDialog(false);
            }}
          />
        </div>
      ) : cartState === "addItem" ? (
        <AddItem setCartState={setCartState} />
      ) : (
        <ItemsDetails setCartState={setCartState} />
      )}
    </>
  );
};
