import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  // local state variable - Super powerful variable
  const [listOfRestaurant, setListOfRestaurant] = useState(resList);
  // console.log(useState(resList));
  return (
    <div className="body-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Your Fav Restaurant"
          className="text-input"
        />
        <button className="search-btn">Search</button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurant.filter((res) => res.info.rating.rating_text >= 4.0);
          setListOfRestaurant(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {listOfRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
