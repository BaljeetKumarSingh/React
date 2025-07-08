const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cft, o2FeaturedImage, locality, rating, cuisine } =
    resData?.info;

  return (
    <div className="relative w-72 h-76 p-2 rounded-md hover:shadow-2xl hover:ring-1 hover:cursor-pointer hover:inset-shadow-xs">
      <div>
        <img className="rounded-md h-36 w-68 " src={o2FeaturedImage.url} alt="restaurant-image" />
        <p className="absolute left-2 bottom-42 px-2 bg-blue-500 text-white text-sm font-medium">{resData.bulkOffers[0].text}</p>
      </div>
      <div className="flex flex-col">
        <h4 className="text-lg font-medium flex justify-between mt-2">
          {name}
          <span className="px-1 rounded-md w-12 h-6 text-white pb-7" style={{ backgroundColor: `#${rating.rating_color}` }}>
            {rating.rating_text}
            {"\u2605"}
          </span>
        </h4>
        <p className="flex justify-between">
          {/* {cuisine.map((data) => data.name)} */}
          {cuisine[0].name}
          <span>{cft.text}</span>
        </p>
        <p className="flex justify-between">
          {locality.name}
          <span>{resData.distance}</span>
        </p>
      </div>
      <span className="absolute right-2 bottom-4">{resData.order.deliveryTime}</span>
    </div>
  );
};

export default RestaurantCard;
