import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";

const Body = () => {
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
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;