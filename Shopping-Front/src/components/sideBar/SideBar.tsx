import HistoryIcon from "@mui/icons-material/History";
import ListIcon from "@mui/icons-material/List";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Badge from "@mui/material/Badge";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import "./sidebar.style.css";

export const SideBar = () => {
  return (
    <>
      <div className="container">
        <img src="logo.svg"></img>
        <div className="button-container">
          <Tooltip title="items">
            <IconButton className="icon-button" sx={{ borderRadius: "5px" }}>
              <ListIcon sx={{ fontSize: "2rem" }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="history">
            <IconButton className="icon-button" sx={{ borderRadius: "5px" }}>
              <HistoryIcon sx={{ fontSize: "2rem" }}/>
            </IconButton>
          </Tooltip>
          <Tooltip title="statistics">
            <IconButton className="icon-button" sx={{ borderRadius: "5px" }}>
              <QueryStatsIcon sx={{ fontSize: "2rem" }}/>
            </IconButton>
          </Tooltip>
        </div>
        <IconButton sx={{backgroundColor: '#F9A109', color: '#FFFFFF', '&:hover': {opacity: 1, backgroundColor: '#F9A109'}}}>
          <Badge badgeContent={4} color="error">
            <ShoppingCartOutlinedIcon/>
          </Badge>
        </IconButton>
      </div>
    </>
  );
};
