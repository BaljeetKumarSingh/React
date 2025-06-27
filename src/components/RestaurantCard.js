const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cft, o2FeaturedImage, locality, rating, cuisine } =
    resData?.info;

  return (
    <div className="res-card">
      <div>
        <img src={o2FeaturedImage.url} alt="restaurant-image" />
        <p className="offer">{resData.bulkOffers[0].text}</p>
      </div>
      <div className="res-info">
        <h4>
          {name}
          <span style={{ backgroundColor: `#${rating.rating_color}` }}>
            {rating.rating_text}
            {"\u2605"}
          </span>
        </h4>
        <p>
          {/* {cuisine.map((data) => data.name)} */}
          {cuisine[0].name}
          <span>{cft.text}</span>
        </p>
        <p>
          {locality.name}
          <span>{resData.distance}</span>
        </p>
      </div>
      <span className="align-right">{resData.order.deliveryTime}</span>
    </div>
  );
};

export default RestaurantCard;
