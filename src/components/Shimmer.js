import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="body-shimmer-container">
        <div className="shimmer-search-bar">
            <div className="shimmer-text-input"></div>
            <div className="shimmer-search-btn"></div>
        </div>
        <button className="shimmer-filter-btn"></button>
        <div className="shimmer-card-container">
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
            <ShimmerCard />
        </div>
    </div>
  );
};

export default Shimmer;
