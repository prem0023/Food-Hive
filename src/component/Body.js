import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { searchRestaurant } from "../utils/helper";
import { RESTRO_LIST_URL } from "../component/constant";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [restaurant, setRestaurant] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  useEffect(() => {
    getRestaurant();
  }, []);

  async function getRestaurant() {
    let restroList = await fetch(RESTRO_LIST_URL);
    const json = await restroList.json();

    setRestaurant(json?.data?.cards[2]?.data?.data?.cards);
    setFilteredRestaurant(json?.data?.cards[2]?.data?.data?.cards);
  }

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
        <button
          className="search-btn"
          onClick={() => {
            const data = searchRestaurant(restaurant, searchText);
            setFilteredRestaurant(data);
          }}
        >
          Submit
        </button>
      </div>
      <div className="card-container">
        {filteredRestaurant.map((restro) => {
          return <RestaurantCard {...restro.data} key={restro.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
