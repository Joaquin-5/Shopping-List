import React, { useEffect, useState } from "react";
import { Box, Icon, InputAdornment, TextField } from "@mui/material";
import "./history.styles.css";
import IconButton from "@mui/material/IconButton";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Cart } from "../../components/cart";
import { useDispatch, useSelector } from "react-redux";
import { startGetHistory } from "../../store/history";
import { RootState } from "../../store";
import dayjs from "dayjs";

export const HistoryPage = () => {
  const [cartState, setCartState] = useState<
    "default" | "addItem" | "detailItem"
  >("default");

  const { histories } = useSelector((state: RootState) => state.history);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startGetHistory() as any);
  }, []);

  console.log(histories.map((i) => i.lists.map((h) => h.name)));

  return (
    <div className="history-container">
      <div className="content-container">
        <h1 className="titulo-principal-history">Shopping history</h1>
        <div className="orders-container">
          {histories.map((i, index) => (
            <>
              <p className="fecha-mes">{dayjs(i.date.split("-")[0]).format("MMMM")} {i.date.split("-")[1]}</p>
                {i.lists.map((h) => (
                  <div className="order-container">
                    <h2 className="titulo-pedido">{h.name}</h2>
                    <div className="datos_pedido-container">
                      <div className="fecha-compra-container">
                        <CalendarMonthIcon />
                        <p className="fecha-compra">
                          {dayjs(h.createdAt).format("ddd DD.MM.YYYY")}
                        </p>
                      </div>
                      <p className={`estado estado-${h.status}`}>{h.status}</p>
                      <IconButton
                        className="ver-detalle"
                        sx={{ color: "#F9A109" }}
                      >
                        <ArrowForwardIosIcon />
                      </IconButton>
                    </div>
                  </div>
                ))}
            </>
          ))}
        </div>
      </div>
      <Cart cartState={"default"} setCartState={setCartState} />
    </div>
  );
};