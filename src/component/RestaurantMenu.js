import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";
import { IMG_CDN_URL } from "./constant";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const params = useParams();
  const { id } = params;

  const getRestaurantDetail = async () => {
    const restro = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=22.572646&lng=88.36389500000001&restaurantId=" +
        id
    );

    const json = await restro.json();
    setMenu(json?.data);
  };

  return menu.length == 0 ? (
    <>
      <div className="restaurant-menu-shimmer"></div>
    </>
  ) : (
    <div className="restaurant-menu">
      <div>
        <h1>{menu.cards[0]?.card?.card?.info?.name}</h1>
        <img
          src={IMG_CDN_URL + menu.cards[0]?.card?.card?.info?.cloudinaryImageId}
        />
        <h2>{menu.cards[0]?.card?.card?.info?.city}</h2>
        <h2>{menu.cards[0]?.card?.card?.info?.costForTwoMessage}</h2>
        <h2>{menu.cards[0]?.card?.card?.info?.avgRating}</h2>
      </div>

      <div>
        <h2>Menu</h2>
        <ul>
          {(menu.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards).map(
            (elem) => {
              const item = elem?.card?.card?.itemCards;
              if (item !== undefined) {
                return item.map((newItem, id) => {
                  return <li key={id}>{newItem?.card?.info?.name} </li>;
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
