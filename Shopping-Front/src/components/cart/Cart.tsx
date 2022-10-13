import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import RemoveIcon from "@mui/icons-material/Remove";
import { ItemButton } from "../itemButton";
import "./cart.styles.css";
import { QuantityButton } from "./quantityButton";

export const Cart = () => {
  return (
    <div className="cart-container">
      <div className="additem-container">
        <div className="image-container">
          <img src="source.svg" alt="imagen botella" />
        </div>
        <div className="info-container">
          <h3 className="titulo-secundario">Didn’t find what you need?</h3>
          <ItemButton
            text="Add item"
            onClick={() => console.log("hola")}
            icon={false}
          />
        </div>
      </div>
      <div className="item-container">
        <h1>Shopping list</h1>
        
        <div className="item-list">
          <h2>Fruit and vegetables</h2>
          <div className="item">
            <p className="item-title">Acocado</p>
            <QuantityButton quantity={4}/>
          </div>
          <div className="item">
            <p className="item-title">Pre-cooked corn 450g</p>
            <QuantityButton quantity={4} />
          </div>
        </div>
        <div className="item-list">
          <h2>Meat and Fish</h2>
          <div className="item">
            <p className="item-title">Chicken 1kg </p>
            <QuantityButton quantity={4} />
          </div>
          <div className="item">
            <p className="item-title">Pork fillets 450g</p>
            <QuantityButton quantity={4} />
          </div>
        </div>
        <div className="item-list">
          <h2>Meat and Fish</h2>
          <div className="item">
            <p className="item-title">Chicken 1kg </p>
            <QuantityButton quantity={4} />
          </div>
          <div className="item">
            <p className="item-title">Pork fillets 450g</p>
            <QuantityButton quantity={4} />
          </div>
        </div>
        <div className="item-list">
          <h2>Meat and Fish</h2>
          <div className="item">
            <p className="item-title">Chicken 1kg </p>
            <button className="button_quantity">3 pcs</button>
          </div>
          <div className="item">
            <p className="item-title">Pork fillets 450g</p>
            <button className="button_quantity">3 pcs</button>
          </div>
        </div>
      </div>
      <div className="search-container">
        <div className="input-container">
          <input
            type="text"
            className="input-text"
            placeholder="Enter a name"
          />
          <input type="submit" value="Save" className="input-submit" />
        </div>
      </div>
    </div>
  );
};
