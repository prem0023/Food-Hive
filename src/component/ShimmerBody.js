const ShimmerSearch = () => {
  return (
    <div className="m-10">
      <div className="shadow-lg w-56 h-10 bg-purple-100 rounded-md" />
    </div>
  );
};

const ShimmerRestroCard = () => {
  return (
    <div className="w-96 m-3 h-96 rounded-md bg-purple-100 hover:shadow-xl hover:bg-purple-200" />
  );
};

const ShimmerBody = () => {
  return (
    <>
      <ShimmerSearch />

      <div className="p-10 flex flex-wrap justify-between">
        {new Array(15).fill("").map((e, id) => {
          return <ShimmerRestroCard key={id} />;
        })}
      </div>
    </>
  );
};

export default ShimmerBody;
