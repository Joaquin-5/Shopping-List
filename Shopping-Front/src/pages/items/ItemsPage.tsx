import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { shoppingApi } from "../../api";
import { Cart } from "../../components/cart";
import { ItemButton } from "../../components/itemButton";
import { SideBar } from "../../components/sideBar/SideBar";
import { Item } from "../../interfaces";

export const ItemsPage = () => {
  const [items, setItems] = useState<Item[]>([]);

  useEffect(() => {
    shoppingApi.get('items').then(res => {
      setItems(res.data);
    })
  }, [])
  

  return (
    <div style={{ paddingTop: ".1px" }}>
      <SideBar />
      <Cart />
      {/* <div style={{height: '200vh', paddingLeft: '5%'}}><h1>Shoppingify allows you take your shopping list wherever you go</h1></div> */}
      <div style={{ paddingLeft: "25%" }}>
        <h2>Fruit and vegetables</h2>
        <Box gap='1.5rem .53rem' display='flex' flexWrap='wrap'>
          {items.map(c => (
            <ItemButton key={c._id} text={c.name} onClick={() => console.log('hola')} icon={true}/>
          ))}
        </Box>
      </div>
    </div>
  );
};
