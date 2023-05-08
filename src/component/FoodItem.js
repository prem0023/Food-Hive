import { addItems } from "../utils/cartSlice";
import { FOOD_IMG_CDN_URL } from "./constant";
import { useDispatch } from "react-redux";

const FoodItem = (newItem) => {
  const dispatch = useDispatch();

  return (
    <>
      <div className="flex items-center font-bold">
        {newItem?.card?.info?.name}
      </div>
      <div className="flex flex-col justify-end">
        <img
          className="rounded-md"
          src={FOOD_IMG_CDN_URL + newItem?.card?.info?.imageId}
        />
        <button
          className="p-2 my-1 bg-green-400 h-11 w-28 rounded-md text-lg font-bold hover:bg-green-500 text-white"
          onClick={() => {
            dispatch(
              addItems([newItem?.card?.info?.name, newItem?.card?.info?.price])
            );
          }}
        >
          Add
        </button>
      </div>
    </>
  );
};

export default FoodItem;
