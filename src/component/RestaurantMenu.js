import { useParams } from "react-router-dom";
import useRestaurant from "../utils/useRestaurant";
import FoodItem from "./FoodItem";

const RestaurantMenu = () => {
  const { id } = useParams();

  let menu = useRestaurant(id);

  return menu.length === 0 ? (
    <div className="flex justify-center mt-10 text-2xl">Loading...</div>
  ) : (
    <div className="flex flex-col items-center p-10 w-full">
      {menu?.cards[0].card.card.info.name !== undefined && (
        <div className="flex w-1/2 justify-between border-b-2">
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl md-2">
              {menu.cards[0].card.card.info.name}
            </h1>
            <h1 className="text-sm">
              {menu.cards[0].card.card.info.cuisines.join(",")}
            </h1>
            <div className="flex text-xs">
              <h2 className="pr-1">{menu.cards[0].card.card.info.city},</h2>
              <h2 className="">
                {menu.cards[0].card.card.info.sla.lastMileTravel} KM
              </h2>
            </div>
            <h2 className="pt-2 pb-4 font-semibold">
              {menu.cards[0].card.card.info.costForTwoMessage}
            </h2>
          </div>
          <div className="p-1 mt-2 flex justify-center flex-col items-center h-20 border-gray-200 border rounded-lg">
            <h2 className="font-bold text-lg text-green-600">
              ⭐{menu.cards[0].card.card.info.avgRating}
            </h2>
            <h3 className="text-xs text-gray-500">
              {menu.cards[0].card.card.info.totalRatingsString}
            </h3>
          </div>
        </div>
      )}

      <div className="flex pt-14 w-1/2">
        <ul className="flex flex-col w-full">
          {menu.cards[
            menu.cards.length - 1
          ].groupedCard.cardGroupMap.REGULAR.cards.map((elem) => {
            const item = elem.card.card.itemCards;
            if (item !== undefined) {
              return item.map((newItem, id) => {
                if (newItem.card.info.imageId === undefined) {
                  return;
                }
                return (
                  <li className=" flex justify-between w-full m-4" key={id}>
                    <FoodItem {...newItem} />
                  </li>
                );
              });
            }
          })}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;
