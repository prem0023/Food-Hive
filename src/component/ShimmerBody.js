const ShimmerSearch = () => {
  return <div className="shimmer-search"></div>;
};

const ShimmerRestroCard = () => {
  return (
    <>
      <div className="shimmer-restro-card">
        <div className="shimmer-img"></div>
        <h2 className="shimmer-h2"></h2>
        <h3 className="shimmer-h3"></h3>
        <h4 className="shimmer-h4"></h4>
      </div>
    </>
  );
};

const ShimmerBody = () => {
  return (
    <>
      <ShimmerSearch />

      <div className="shimmer-card-container">
        {new Array(10).fill("").map((e, id) => {
          return <ShimmerRestroCard key={id} />;
        })}
      </div>
    </>
  );
};

export default ShimmerBody;
