import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { city, resName } = useParams();
  const resInfo = useRestaurantMenu(city, resName);

  if (resInfo === null) return <Shimmer />;

  const { name, rating, cuisine_string, res_status_text, timing } =
    resInfo?.sections?.SECTION_BASIC_INFO;
  const { address, phoneDetails } = resInfo?.sections?.SECTION_RES_CONTACT;
  const { items } =
    resInfo?.order?.menuList?.menus[0]?.menu?.categories[0]?.category;

  // console.log(items);

  return (
    <div className="mt-4 p-4">
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">{name}</h1>
        <div className="flex gap-2">
          <span
            className="pl-1.5 rounded-md w-12 h-6 text-white pb-7"
            style={{ backgroundColor: `#${rating?.rating_color}` }}
          >
            {rating?.rating_text}
            {"\u2605"}
          </span>
          <div className="flex-col">
            <p>{rating?.votes}</p>
            <p className="border-b-2 border-dotted">Delivery Ratings</p>
          </div>
        </div>
      </div>
      <p>{cuisine_string}</p>
      <p>{address}</p>
      <div className="flex gap-1.5">
        <span className="border-2 rounded-2xl px-2">
          {res_status_text} - {timing?.timing_desc}
        </span>
        <span> | </span>
        <span> {phoneDetails?.phoneStr}</span>
      </div>
      <div className="flex justify-center mt-4">
        <div className="w-150">
          <h2 className="text-center text-lg">Menu</h2>
          <ul>
            {items.map((data) => (
              <li className="flex justify-between" key={data.item.id}>
                {data.item.name}
                <span> ₹{data.item.display_price}</span>
              </li>
            ))}
            {/* <li>{items[0]?.item?.name}</li>
            <li>{items[1]?.item?.name}</li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
