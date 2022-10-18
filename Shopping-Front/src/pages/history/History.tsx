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
      <div className="content-container">
        <h1 className="titulo-principal-history">Shopping history</h1>
        <div className="orders-container">
          <p className="fecha-mes">August 2020</p>
          <div className="order-container">
            <h2 className="titulo-pedido">Grocery List</h2>
            <div className="datos_pedido-container">
              <div className="fecha-compra-container">
                <CalendarMonthIcon />
                <p className="fecha-compra">Mon 27.8.2020</p>
              </div>
              <p className="estado estado-completed">completed</p>
              <IconButton className="ver-detalle" sx={{ color: "#F9A109" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
          <div className="order-container">
            <h2 className="titulo-pedido">Grocery List</h2>
            <div className="datos_pedido-container">
              <div className="fecha-compra-container">
                <CalendarMonthIcon />
                <p className="fecha-compra">Mon 27.8.2020</p>
              </div>
              <p className="estado estado-completed">completed</p>
              <IconButton className="ver-detalle" sx={{ color: "#F9A109" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </div>
        <div className="orders-container">
          <p className="fecha-mes">August 2020</p>
          <div className="order-container">
            <h2 className="titulo-pedido">Grocery List</h2>
            <div className="datos_pedido-container">
              <div className="fecha-compra-container">
                <CalendarMonthIcon />
                <p className="fecha-compra">Mon 27.8.2020</p>
              </div>
              <p className="estado estado-completed">completed</p>
              <IconButton className="ver-detalle" sx={{ color: "#F9A109" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
          <div className="order-container">
            <h2 className="titulo-pedido">Grocery List</h2>
            <div className="datos_pedido-container">
              <div className="fecha-compra-container">
                <CalendarMonthIcon />
                <p className="fecha-compra">Mon 27.8.2020</p>
              </div>
              <p className="estado estado-cancelled">cancelled</p>
              <IconButton className="ver-detalle" sx={{ color: "#F9A109" }}>
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </div>
      </div>
      <Cart />
    </div>
  );
};


