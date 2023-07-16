import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import ShimmerUI from "./ShimmerUI";
import { searchRestaurant } from "../utils/helper";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilteredRestro,
  addRestro,
  setTotalRestro,
} from "../utils/restroSlice";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const totalRestro = useSelector((store) => store.restro.totalRestro);
  const restaurant = useSelector((store) => store.restro.restaurant);
  const filteredRestaurant = useSelector(
    (store) => store.restro.filteredRestaurant
  );
  const dispatch = useDispatch();

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll);
  }, []);

  useEffect(() => {
    const timeId = setTimeout(() => getRestaurant(), 100);
    return () => clearTimeout(timeId);
  }, [totalRestro]);

  useEffect(() => {
    dispatch(addFilteredRestro(restaurant));
  }, [restaurant]);

  async function getRestaurant() {
    let restroList = await fetch(
      `https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.572646&lng=88.36389500000001&offset=${totalRestro}&sortBy=RELEVANCE&pageType=SEE_ALL&page_type=DESKTOP_SEE_ALL_LISTING`
    );
    const json = await restroList.json();
    const newData = json?.data?.cards || [];
    dispatch(addRestro(newData));
  }

  const handleInfiniteScroll = () => {
    const pageHeight = window.innerHeight;
    const scrolledHeight = document.documentElement.scrollTop;
    const totalPageHeight = document.documentElement.scrollHeight;

    try {
      if (pageHeight + scrolledHeight + 1000 >= totalPageHeight) {
        dispatch(setTotalRestro(totalRestro + 15));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return restaurant.length == 0 ? (
    <ShimmerUI />
  ) : (
    <>
      <div className="flex justify-center py-10">
        <input
          className=" h-10 w-80 px-2 border border-purple-200 bg-purple-100 rounded-md focus:border-purple-300 focus:outline-none"
          type="text"
          placeholder=" Search.."
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        ></input>
        <button
          className="rounded-lg h-10  px-2 border border-purple-400 bg-purple-300 ml-1 font-bold hover:bg-purple-400"
          onClick={() => {
            const data = searchRestaurant(restaurant, searchText);
            dispatch(addFilteredRestro(data));
          }}
        >
          Submit
        </button>
      </div>
      <h2
        id="search-result"
        className=" flex justify-start text-xl py-3 px-52 font-bold"
      ></h2>

      <div className="xl:px-16 sm:px-10 flex flex-wrap justify-center">
        {filteredRestaurant.map((restro, index) => {
          return (
            <RestaurantCard
              {...restro.data.data}
              key={restro.data.data.id + index}
            />
          );
        })}
      </div>
    </>
  );
};

export default Body;
