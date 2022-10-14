import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { shoppingApi } from "../../api";
import { Cart } from "../../components/cart";
import { ItemButton } from "../../components/itemButton";
import { Category } from "../../interfaces";
import { addItem } from "../../store/cart";
import "./items.styles.css";

export const ItemsPage = () => {
  const [categories, setCategories] = useState<Category[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    shoppingApi.get("categories").then((res) => {
      setCategories(res.data);
    });
  }, []);

  return (
    <div className="home-container">
      {/* <div style={{height: '200vh', paddingLeft: '5%'}}><h1>Shoppingify allows you take your shopping list wherever you go</h1></div> */}
      <div className="items-home">
        {categories.map((c) => (
          <React.Fragment key={c._id}>
            <h2>{c.name}</h2>
            <Box gap="1.5rem .53rem" display="flex" flexWrap="wrap">
              {c.items?.map((i) => (
                <ItemButton
                  key={i._id}
                  text={i.name}
                  onClick={() =>
                    dispatch(
                      addItem({
                        category: c,
                        item: { ...i, category: { _id: c._id, name: c.name } },
                      })
                    )
                  }
                  icon={true}
                />
              ))}
            </Box>
          </React.Fragment>
        ))}
      </div>
      <Cart />
    </div>
  );
};
