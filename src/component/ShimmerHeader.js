const ShimmerTitle = () => {
  return (
    <>
      <div className="shimmer-logo"></div>
    </>
  );
};

const ShimmerHeader = () => {
  return (
    <>
      <div className="shimmer-header">
        <ShimmerTitle />
        <div className="shimmer-navbar">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default ShimmerHeader;
