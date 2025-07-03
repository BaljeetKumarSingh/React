import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API } from "../utils/constants";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { city, resName } = useParams();
  // console.log(city, resName);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(`${MENU_API}/${city}/${resName}/order`);
    const json = await data.json();
    setResInfo(json?.page_data);
  };

  if (resInfo === null) return <Shimmer />;
  // console.log(resInfo);

  const { name, rating, cuisine_string, res_status_text, timing } =
    resInfo?.sections?.SECTION_BASIC_INFO;
  const { address, phoneDetails } = resInfo?.sections?.SECTION_RES_CONTACT;
  const { items } =
    resInfo?.order?.menuList?.menus[0]?.menu?.categories[0]?.category;

  // console.log(items);

  return (
    <div className="res-menu">
      <div className="flex-between">
        <h1>{name}</h1>
        <div className="flex-gap-8px">
          <span
            className="rating-box"
            style={{ backgroundColor: `#${rating?.rating_color}` }}
          >
            {rating?.rating_text}
            {"\u2605"}
          </span>
          <div className="flex-col">
            <p>{rating?.votes}</p>
            <p className="border-bottom-dotted">Delivery Ratings</p>
          </div>
        </div>
      </div>
      <p>{cuisine_string}</p>
      <p>{address}</p>
      <div className="flex-gap-5px">
        <span className="border-rounded-border">
          {res_status_text} - {timing?.timing_desc}
        </span>
        <span> | </span>
        <span> {phoneDetails?.phoneStr}</span>
      </div>
      <h2>Menu</h2>
      <ul>
        {items.map((data) => (
          <li className="flex-between" key={data.item.id}>
            {data.item.name}
            <span> ₹{data.item.display_price}</span>
          </li>
        ))}
        {/* <li>{items[0]?.item?.name}</li>
        <li>{items[1]?.item?.name}</li> */}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
