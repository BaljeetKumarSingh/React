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
  // console.log("Body Rendered");

  // local state variable - Super powerful variable
  // this is one of the hoock that react provide to us
  // whenever this state variable get updated, react re-render its component
  // react is keeping an eye on this use state variable
  const [listOfRestaurant, setListOfRestaurant] = useState([]); // this is original list of res, only update once while getting it from api

  // this will act as a copy of list of res, and used to filter res from original list of res
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // whenever state variable updates, react triggers a reconciliation cycle (re-render the component)

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

  useEffect(() => {
    getRestaurantList();
  }, []);

  const getRestaurantList = async () => {
    const list = await fetchRestaurantList(resList);
    // console.log(list);
    setListOfRestaurant(list);
    setFilteredRestaurant(list);
    // after this line body get rendered and update above both state variable in one render.(can see by debuging)
  };

  // Conditional Rendering
  // if (listOfRestaurant.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search Your Fav Restaurant"
          className="text-input"
          value={searchText} // this is read only type
          // this will help us to change the searchText and thus make it editable
          onChange={(e) => {
            setSearchText(e.target.value); // and on every key press its changes state variable by re-rendering the entire body component
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            // Filter the cards based of the searchText(input value)
            const searchFilteredList = listOfRestaurant.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setFilteredRestaurant(searchFilteredList);
          }}
        >
          Search
        </button>
      </div>
      <button
        className="filter-btn"
        onClick={() => {
          const filteredList = listOfRestaurant.filter(
            (res) => res.info.rating.rating_text >= 4.0
          );
          setFilteredRestaurant(filteredList);
        }}
      >
        Top Rated Restaurant
      </button>
      <div className="res-container">
        {filteredRestaurant.map((restaurant) => (
          <RestaurantCard key={restaurant.info.resId} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
