import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

// creating user defined promise(in order to mimic api call) as my api failed

function fetchRestaurantList(data) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data);
    }, 1000);
  });
  return promise;
}

const Body = () => {

  // local state variable - Super powerful variable
  // this is one of the hoock that react provide to us
  // whenever this state variable get updated, react re-render its component
  // react is keeping an eye on this use state variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]);

  // Api failled

  // useEffect(() => {
  //   fetchData();
  // }, []);

  // const fetchData = async () => {
  //   const data = await fetch(
  //     "https://developers.zomato.com/api/v2.1/collections?lat=-77596659.4184915&lon=-77596659.4184915&city_id=ipsum sunt labore ex&count=56625527"
  //   );
  //   const json = await data.json();
  //   console.log(json);
  //   // setListOfRestaurant(json?.data.crad);
  // };

  // this is another hoock that react provide to us.
  // it takes two parameter callback function and dependency array
  // super power: as soon as rendering process is finished it call this callback function.
  // load -> Render -> API -> Re-render 

  useEffect(() =>{
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    const list = await fetchRestaurantList(resList);
    // console.log(list);
    setListOfRestaurant(list);
  }

  // Conditional Rendering
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant.length === 0 ? <Shimmer /> : (
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
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.rating.rating_text >= 4.0
          );
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
