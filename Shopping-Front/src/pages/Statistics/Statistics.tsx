import React from "react";
import { Cart } from "../../components/cart/Cart";
import "./styles/Statistics.css";
export interface StatisticsInterface {}
import LinearProgress, {
  LinearProgressProps,
} from "@mui/material/LinearProgress";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface ILinearProgressWithLabel extends LinearProgressProps {
  label: string;
  value: number;
}

const LinearProgressWithLabel: React.FC<ILinearProgressWithLabel> = ({
  label,
  value,
  ...rest
}) => {
  return (
    <>
      <Box
        display={"flex"}
        justifyContent={"space-between"}
        alignItems="center"
		sx={{marginBottom: '1rem'}}
      >
        <label className="label">{label}</label>
        <Typography fontWeight={'bold'} fontSize={'18px'}>{value}%</Typography>
      </Box>
      <LinearProgress
        value={value}
        variant="determinate"
        color="warning"
        sx={{ borderRadius: "4px", backgroundColor: "#E0E0E0", height: "6px" }}
      />
    </>
  );
};

/* function LinearProgressWithLabel(
  props: LinearProgressProps & { value: number }
) {
  return (
    <Box sx={{ display: "flex", alignItems: "center" }}>
      <Box sx={{ width: "100%", mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.value
        )}%`}</Typography>
      </Box>
    </Box>
  );
} */

const Statistics: React.FC<StatisticsInterface> = () => {
  return (
    <>
      <div className="statisitcs-container">
        <div className="top-items">
          <h2>Top Items</h2>
          <Box
            sx={{ width: "75%", position: "relative", marginBottom: "1.8rem" }}
          >
            <LinearProgressWithLabel
              label="Bannana"
              value={12}
              variant="determinate"
              color="warning"
              sx={{
                borderRadius: "4px",
                backgroundColor: "#E0E0E0",
                height: "6px",
              }}
            />
          </Box>
          <Box
            sx={{ width: "75%", position: "relative", marginBottom: "1.8rem" }}
          >
            <LinearProgressWithLabel
              label="Bannana"
              value={10}
              color="warning"
              sx={{
                borderRadius: "4px",
                backgroundColor: "#E0E0E0",
                height: "6px",
              }}
            />
          </Box>
          <Box
            sx={{ width: "75%", position: "relative", marginBottom: "1.8rem" }}
          >
            <LinearProgressWithLabel
              label="Bannana"
              value={8}
              color="warning"
              sx={{
                borderRadius: "4px",
                backgroundColor: "#E0E0E0",
                height: "6px",
              }}
            />
          </Box>
        </div>
        <div className="top-categories">
          <h2>Top Categories</h2>
          <Box
            sx={{ width: "75%", position: "relative", marginBottom: "1.8rem" }}
          >
            <LinearProgressWithLabel
              label="Bannana"
              value={23}
              sx={{
                borderRadius: "4px",
                backgroundColor: "#E0E0E0",
                height: "6px",
              }}
            />
          </Box>
          <Box
            sx={{ width: "75%", position: "relative", marginBottom: "1.8rem" }}
          >
            <LinearProgressWithLabel
			  label="Banna"
              value={14}
              sx={{
                borderRadius: "4px",
                backgroundColor: "#E0E0E0",
                height: "6px",
              }}
            />
          </Box>
          <Box
            sx={{ width: "75%", position: "relative", marginBottom: "1.8rem" }}
          >
            <LinearProgressWithLabel
			  label="Bannana"
              value={11}
              sx={{
                borderRadius: "4px",
                backgroundColor: "#E0E0E0",
                height: "6px",
              }}
            />
          </Box>
        </div>
        <div className="yearly-summary">
          <h2>Monthly Summary</h2>
        </div>
      </div>
      {/* <Cart cartState="default" /> */}
    </>
  );
};

export default Statistics;
