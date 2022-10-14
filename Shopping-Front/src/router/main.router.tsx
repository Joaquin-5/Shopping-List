import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet, Route, Routes } from "react-router-dom";
import { SideBar } from "../components/sideBar/SideBar";
import { HistoryPage } from "../pages/history/History";
import { ItemsPage } from "../pages/items/ItemsPage";
import { getItems } from "../store/cart";
import Statistics from '../pages/Statistics/Statistics';

export const MainRouter = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<ItemsPage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/statistics" element={<Statistics />} />
      </Route>
    </Routes>
  );
};

const Layout = () => {
  return (
    <div style={{ paddingTop: ".1px" }}>
      <SideBar >
        <Outlet />
      </SideBar>
    </div>
  );
};
