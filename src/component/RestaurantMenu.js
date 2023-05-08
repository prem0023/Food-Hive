import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "./constant";
import useRestaurant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import FoodItem from "./FoodItem";

const RestaurantMenu = () => {
  const { id } = useParams();
  // const params = useParams();
  // const { id } = params;

  const menu = useRestaurant(id);

  return menu.length == 0 ? (
    <div className="max-w-md max-h-80 bg-slate-400"></div>
  ) : (
    <div className=" flex p-10">
      <div>
        <h1 className="font-bold text-3xl py-5">
          {menu.cards[0]?.card?.card?.info?.name}
        </h1>
        <img
          className="my-3 rounded-lg shadow-lg"
          src={IMG_CDN_URL + menu.cards[0]?.card?.card?.info?.cloudinaryImageId}
        />
        <h2 className="font-bold text-xl my-2">
          {menu.cards[0]?.card?.card?.info?.city}
        </h2>
        <h2>{menu.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
        <h2>{menu.cards[0]?.card?.card?.info?.locality}</h2>
        <h2>{menu.cards[0]?.card?.card?.info?.avgRating}</h2>
      </div>

      <div className="p-10">
        <h2 className="font-bold text-xl">Menu</h2>
        <ul className="">
          {(menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).map(
            (elem) => {
              const item = elem?.card?.card?.itemCards;
              if (item !== undefined) {
                return item.map((newItem, id) => {
                  if (newItem?.card?.info?.imageId == undefined) {
                    return;
                  }
                  return (
                    <li className=" flex justify-between m-4" key={id}>
                      <FoodItem {...newItem} />
                    </li>
                  );
                });
              }
            }
          )}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
