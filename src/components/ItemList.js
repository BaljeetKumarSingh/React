const ItemList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => (
        <li className="flex gap-4 px-2 mb-4 w-full" key={item?.item?.id}>
          <div className="w-1/7 w-32.5 h-32.5 relative">
            <img
              className="w-32.5 h-32.5 rounded-lg"
              src={item?.item?.item_image_url}
            />
            <img
              className="absolute top-1 right-1 w-3.5"
              src={item?.item?.item_tag_image}
            />
          </div>
          <div className="w-6/7">
            <h2>{item?.item?.name}</h2>
            <p> ₹{item?.item?.display_price}</p>
            <span>{item?.item?.desc}</span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ItemList;
