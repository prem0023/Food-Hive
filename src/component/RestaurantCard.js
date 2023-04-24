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
      <div className="restaurant-card">
        <img src={IMG_CDN_URL + cloudinaryImageId}></img>
        <Link to={"/restaurant/" + id}>
          <h2>{name}</h2>
          <h3>{cuisines.join(", ")}</h3>
          <h4>{Math.ceil(lastMileTravel) + " KM"}</h4>
        </Link>
      </div>
    </>
  );
};

export default RestaurantCard;
