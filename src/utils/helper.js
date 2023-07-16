export const searchRestaurant = (restaurants, searchText) => {
  const filterData = restaurants.filter((restaurant) =>
    restaurant?.data?.data?.name
      ?.toLowerCase()
      .includes(searchText.toLowerCase())
  );
  document.getElementById("search-result").innerHTML =
    "You searched for '" + searchText + "'";
  return filterData;
};
