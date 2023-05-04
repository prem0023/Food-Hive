import { IMG_CDN_URL } from "./constant";
import { Link } from "react-router-dom";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravel,
  id,
}) => {
  return (
    <>
      <div className="w-96 m-3 h-96 rounded-md bg-purple-100 hover:shadow-xl hover:bg-purple-200">
        <div className="p-4">
          <img src={IMG_CDN_URL + cloudinaryImageId}></img>
          <Link to={"/restaurant/" + id}>
            <h2 className="font-bold text-xl py-2">{name}</h2>
          </Link>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{Math.ceil(lastMileTravel) + " KM"}</h4>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
