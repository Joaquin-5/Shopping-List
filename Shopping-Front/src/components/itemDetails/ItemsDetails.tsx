import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store";
import "./itemDetails.styles.css";

interface Props {
  setCartState: React.Dispatch<
    React.SetStateAction<"addItem" | "default" | "detailItem">
  >;
}

export const ItemsDetails: React.FC<Props> = ({ setCartState }) => {
  const dispatch = useDispatch();
  const { activeItem } = useSelector((state: RootState) => state.data);

  return (
    <div className="details-container">
      <div
        className="backButton-container"
        onClick={() => setCartState("default")}
      >
        {/* <IconButton> */}
        <KeyboardBackspaceIcon color="warning" />
        {/* </IconButton> */}
        <p style={{ color: "#F9A109" }}>back</p>
      </div>
      <img
        src="http://t2.gstatic.com/licensed-image?q=tbn:ANd9GcTREpJ-eKtgxuFWo-8lAm3xWqUrkLV-uw3U17IpQltmFNkzq6kZyr08GwuT5SuNIkWEi_tM1uLCdziNKN85A20"
        alt="avocado"
        className="image"
      />
      <p className="detail-label">name</p>
      <h1 className="name">{activeItem?.name}</h1>
      <p className="detail-label">category</p>
      <h2 className="name">{activeItem?.category.name}</h2>
      <p className="detail-label">note</p>
      <p className="name">{activeItem?.note}</p>
      <div className="submit-cancel-details">
        <button className="cancel-button">delete</button>
        <input
          type="button"
          value="Add to list"
          className="submit-button"
          /* onClick={() =>
                dispatch(
                addItemToCart({
                    category: c,
                    item: {
                    ...i,
                    category: { _id: c._id, name: c.name },
                    },
                })
                )
            } */
        />
      </div>
    </div>
  );
};
