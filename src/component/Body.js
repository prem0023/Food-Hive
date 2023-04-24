import { useEffect, useState } from "react";
import { RestaurantList } from "./constant";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  // const []

  const searchRestaurant = () => {
    setRestaurant(
      RestaurantList.filter((restaurant) =>
        restaurant?.data?.name?.toLowerCase().includes(searchText.toLowerCase())
      )
    );
    document.getElementById("search-result").innerHTML =
      "You searched for '" + searchText + "'";
    setSearchText("");
  };

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    let restroList = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&page_type=DESKTOP_WEB_LISTING"
    );

    let json = await restroList.json();
    setRestaurant(json.data.cards[2].data.data.cards);
  }
  console.log(restaurant);
  return restaurant.length == 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="search-container">
        <h2 id="search-result"></h2>
        <input
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        <button className="search-btn" onClick={searchRestaurant}>
          Submit
        </button>
      </div>
      <div className="card-container">
        {restaurant.map((restro) => {
          return <RestaurantCard {...restro.data} key={restro.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
