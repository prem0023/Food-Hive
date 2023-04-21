import { IMG_CDN_URL } from "./constant";

const RestaurantCard = ({
  name,
  cloudinaryImageId,
  cuisines,
  lastMileTravel,
}) => {
  return (
    <>
      <div className="restaurant-card">
        <img src={IMG_CDN_URL + cloudinaryImageId}></img>
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>{Math.ceil(lastMileTravel) + " KM"}</h4>
      </div>
    </>
  );
};

export default RestaurantCard;
