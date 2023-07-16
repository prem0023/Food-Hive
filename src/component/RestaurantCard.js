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
      <div className="w-72 m-2 h-80 rounded-md border border-gray-100 object-contain hover:shadow-lg hover:bg-gray-100 hover:border-gray-200">
        <div className="p-4">
          <img src={IMG_CDN_URL + cloudinaryImageId} alt="food-img"></img>
          <Link to={"/restaurant/" + id}>
            <h2 className="font-bold py-2 hover:font-extrabold">{name}</h2>
          </Link>
          <h3 className="font-light text-sm">{cuisines.join(", ")}</h3>
          <h4>{Math.ceil(lastMileTravel) + " KM"}</h4>
        </div>
      </div>
    </>
  );
};

export default RestaurantCard;
