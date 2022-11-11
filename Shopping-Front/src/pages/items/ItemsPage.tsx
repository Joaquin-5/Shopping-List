import SearchIcon from "@mui/icons-material/Search";
import { alpha, Box, InputBase, styled } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Cart } from "../../components/cart";
import { ItemButton } from "../../components/itemButton";
import { RootState } from "../../store";
import { addItemToCart } from "../../store/cart";
import { setActiveItem, startGetCategories } from "../../store/data";
import { searchItems } from "../../store/data/dataThunk";
import "./items.styles.css";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: "12px",
  backgroundColor: "#FFFFFF",
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
  marginRight: "1rem",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  zIndex: 2,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(2, 1, 2, 0),
    backgroundColor: "#FFFFFF",
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "20ch",
    },
    borderRadius: "12px",
  },
}));

export const ItemsPage = () => {
  const { categories, itemsSearch } = useSelector(
    (state: RootState) => state.data
  );
  const dispatch = useDispatch();
  const [cartState, setCartState] = useState<
    "default" | "addItem" | "detailItem"
  >("default");

  useEffect(() => {
    dispatch(startGetCategories() as any);
  }, []);

  return (
    <div className="home-container">
      <Box>
        <div className="header">
          <h1 className="titulo-principal">
            <span className="span">Shoppingify</span> allows you take your
            shopping list wherever you go
          </h1>
          <div>
            <Search sx={{ marginLeft: "auto" }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="search item"
                inputProps={{ "aria-label": "search" }}
                onChange={(e) => dispatch(searchItems(e.target.value) as any)}
                // onChange={handleSearch}
              />
            </Search>
          </div>
        </div>
        <div className="items-home">
          {itemsSearch.length > 0
            ? itemsSearch.map((c) => (
                <React.Fragment key={c._id}>
                  <h2 style={{ marginTop: "3rem" }}>{c.name}</h2>
                  <Box gap="1.5rem .53rem" display="flex" flexWrap="wrap">
                    {c.items?.map((i:any) => (
                      <ItemButton
                        key={i._id}
                        text={i.name}
                        onClick={() =>
                          dispatch(
                            addItemToCart({
                              category: c,
                              item: {
                                ...i,
                                category: { _id: c._id, name: c.name },
                              },
                            })
                          )
                        }
                        icon={true}
                        onItemClick={() => {
                          setCartState('detailItem');
                          dispatch(setActiveItem({ ...i, category: c }));
                        }}
                      />
                    ))}
                  </Box>
                </React.Fragment>
              ))
            : categories.map((c) => (
                <React.Fragment key={c._id}>
                  <h2 style={{ marginTop: "3rem" }}>{c.name}</h2>
                  <Box gap="1.5rem .53rem" display="flex" flexWrap="wrap">
                    {c.items?.map((i:any) => (
                      <ItemButton
                        key={i._id}
                        text={i.name}
                        onClick={() =>
                          dispatch(
                            addItemToCart({
                              category: c,
                              item: {
                                ...i,
                                category: { _id: c._id, name: c.name },
                              },
                            })
                          )
                        }
                        icon={true}
                        onItemClick={() => {
                          setCartState('detailItem');
                          dispatch(setActiveItem({ ...i, category: c }));
                        }}
                      />
                    ))}
                  </Box>
                </React.Fragment>
              ))}
        </div>
      </Box>
      <Cart cartState={cartState} setCartState={setCartState} />
    </div>
  );
};

// {categories.map((c) => (
//   <React.Fragment key={c._id}>
//     <h2 style={{ marginTop: "3rem" }}>{c.name}</h2>
//     <Box gap="1.5rem .53rem" display="flex" flexWrap="wrap">
//       {c.items?.map((i) => (
//         <ItemButton
//           key={i._id}
//           text={i.name}
//           onClick={() =>
//             dispatch(
//               addItem({
//                 category: c,
//                 item: {
//                   ...i,
//                   category: { _id: c._id, name: c.name },
//                 },
//               })
//             )
//           }
//           icon={true}
//         />
//       ))}
//     </Box>
//   </React.Fragment>
// ))}
