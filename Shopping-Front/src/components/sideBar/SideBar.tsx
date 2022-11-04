import HistoryIcon from "@mui/icons-material/History";
import ListIcon from "@mui/icons-material/List";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { RootState } from "../../store";
import "./sidebar.style.css";
import { Box } from "@mui/material";

interface Props {
  children: React.ReactNode;
}

export const SideBar: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const { items } = useSelector((state: RootState) => state.cart);
  const location = useLocation();

  return (
    <>
      <Box display="flex" maxWidth={"100vw"}>
        <div className="container">
          <img src="logo.svg" onClick={() => navigate("/")} className="logo"></img>
          <div className="button-container">
            <Tooltip title="items">
              <IconButton
                className={`icon-button ${
                  location.pathname.split("/")[1] === "" && "icon-button-active"
                }`}
                sx={{ borderRadius: "5px" }}
                onClick={() => navigate("/")}
              >
                <ListIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="history">
              <IconButton
                className={`icon-button ${
                  location.pathname.split("/")[1] === "history" &&
                  "icon-button-active"
                }`}
                sx={{ borderRadius: "5px" }}
                onClick={() => navigate("/history")}
              >
                <HistoryIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Tooltip>
            <Tooltip title="statistics">
              <IconButton
                className="icon-button"
                sx={{ borderRadius: "5px" }}
                onClick={() => navigate("/statistics")}
              >
                <QueryStatsIcon sx={{ fontSize: "2rem" }} />
              </IconButton>
            </Tooltip>
          </div>
          <IconButton
            sx={{
              backgroundColor: "#F9A109",
              color: "#FFFFFF",
              "&:hover": { opacity: 1, backgroundColor: "#F9A109" },
            }}
            href="#shopping-list"
          >
            <Badge
              badgeContent={items
                .map((category) => category.items.length)
                .reduce((a, b) => a + b, 0)}
              color="error"
            >
              <ShoppingCartOutlinedIcon />
            </Badge>
          </IconButton>
        </div>
        {children}
      </Box>
    </>
  );
};
