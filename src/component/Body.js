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
      <div className="p-10">
        <h2 id="search-result"></h2>
        <input
          className="shadow-lg h-10 w-52 bg-purple-100 rounded-md"
          type="text"
          placeholder=" Search.."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        <button
          className="rounded-lg h-10 w-16 bg-purple-300 ml-1 font-bold"
          onClick={() => {
            const data = searchRestaurant(restaurant, searchText);
            setFilteredRestaurant(data);
          }}
        >
          Submit
        </button>
      </div>
      <div className="p-10 flex flex-wrap justify-between">
        {filteredRestaurant.map((restro) => {
          return <RestaurantCard {...restro.data} key={restro.data.id} />;
        })}
      </div>
    </>
  );
};

export default Body;
