import AddIcon from "@mui/icons-material/Add";
import { Button, Tooltip } from "@mui/material";

interface Props {
  text: string;
  onClick?:
    | React.MouseEventHandler<SVGSVGElement | HTMLButtonElement>
    | undefined;
  icon: boolean;
  onItemClick?: React.MouseEventHandler<HTMLSpanElement> | undefined
}

export const ItemButton: React.FC<Props> = ({ text, onClick, icon = true, onItemClick }) => {
  return icon ? (
    <Button
      endIcon={
        icon ? (
          <Tooltip
            children={<AddIcon sx={{ color: "#C1C1C4" }} onClick={onClick} />}
            title={"Agregar al Carrito"}
          />
        ) : null
      }
      variant="contained"
      size="large"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        color: "#000000",
        fontWeight: "bold",
        "&:hover": { backgroundColor: "#FFFFFF" },
      }}
    >
      <span onClick={onItemClick}>{text}</span>
    </Button>
  ) : (
    <Button
      variant="contained"
      size="large"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        color: "#000000",
        fontWeight: "bold",
        "&:hover": { backgroundColor: "#FFFFFF" },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
