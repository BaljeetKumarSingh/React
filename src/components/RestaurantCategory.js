import { useState } from "react";
const RestaurantCategory = (props) => {
  const [isactive, setIsActive] = useState(false);
  const { menu } = props;
  console.log(props);

  return (
    <div className="mb-4">
      <div className="accordian-item">
        <div
          className="flex justify-between bg-gray-300 px-2"
          onClick={() => {
            setIsActive(!isactive);
          }}
        >
          <div>{menu?.menu?.name}</div>
          <div>{isactive ? "\u25B4" : "\u25BE"}</div>
        </div>
        {isactive && (
          <ul>
            {menu.menu?.categories[0]?.category?.items.map((item) => (
              <li className="flex justify-between px-2" key={item.item.id}>
                {item.item.name}
                <span> ₹{item.item.display_price}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
