import { useEffect, useState } from "react";
import { FETCH_RESTRO_URL } from "../component/constant";

const useRestaurant = (id) => {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    getRestaurantDetail();
  }, []);

  const getRestaurantDetail = async () => {
    const restro = await fetch(FETCH_RESTRO_URL + id);
    const json = await restro.json();
    setMenu(json?.data);
  };
  return menu;
};

export default useRestaurant;
