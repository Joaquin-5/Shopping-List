import AddIcon from "@mui/icons-material/Add";
import { Button } from "@mui/material";

interface Props {
    text: string,
    onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined
    icon: boolean
}

export const ItemButton: React.FC<Props> = ({text, onClick, icon}) => {
  return (
    <Button
      endIcon={icon ? <AddIcon sx={{ color: "#C1C1C4" }} /> : null}
      variant="contained"
      size="large"
      sx={{
        backgroundColor: "#FFFFFF",
        borderRadius: "12px",
        color: "#000000",
        fontWeight: 'bold',
        "&:hover": { backgroundColor: "#FFFFFF" },
      }}
      onClick={onClick}
    >
      {text}
    </Button>
  );
};
