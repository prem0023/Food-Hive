import { addItems } from "../utils/cartSlice";
import { FOOD_IMG_CDN_URL } from "./constant";
import { useDispatch } from "react-redux";

const FoodItem = (newItem) => {
  const dispatch = useDispatch();

  return (
    <div className="flex items-stretch w-full border-b">
      <div className="flex flex-col ite pt-1 w-full">
        <div className="font-bold">{newItem?.card?.info?.name}</div>
        <div className="pt-2"> Rs {newItem?.card?.info?.price / 100}</div>
      </div>
      <div className="flex flex-col  justify-end">
        <img
          className="rounded-md h-20 w-36"
          src={FOOD_IMG_CDN_URL + newItem?.card?.info?.imageId}
          alt="food"
        />
        <div className="flex justify-end">
          <button
            className="my-1 bg-gray-300 w-16 rounded-md font-bold hover:bg-gray-400 "
            onClick={() => {
              dispatch(
                addItems([
                  newItem?.card?.info?.name,
                  newItem?.card?.info?.price,
                ])
              );
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
