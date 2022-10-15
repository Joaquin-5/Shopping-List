import React from "react";
import { Icon, InputAdornment, TextField } from "@mui/material";
import "./history.styles.css";
import IconButton from "@mui/material/IconButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Cart } from "../../components/cart";

export const HistoryPage = () => {
  return (
    <div className="history-container">
      <div className="orders-container">
        <h1>Shopping history</h1>
        <p className="fecha-mes">August 2020</p>
        <div className="order-container">
          <h2 className="titulo-pedido">Grocery List</h2>
          <div className="datos_pedido-container">
            <div className="fecha-compra-container">
              <CalendarMonthIcon />
              <p className="fecha-compra">Mon 27.8.2020</p>
            </div>
            <p className="estado estado-completed">completed</p>
            <IconButton className="ver-detalle" sx={{color: '#F9A109'}}>
              <ArrowForwardIosIcon />
            </IconButton>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};

{
  /* <div className="header">
        <h1 className="titulo-principal">
          <span className="span">Shoppingify</span> allows you take your
          shopping list wherever you go
        </h1>
        <div>
          <TextField
            label="With normal TextField"
            id="outlined-start-adornment"
            sx={{ m: 1, width: "25ch" }}
            InputProps={{
              startAdornment: (
                <Icon>
                  <SearchIcon />
                </Icon>
              ),
            }}
          />
        </div>
      </div> */
}
