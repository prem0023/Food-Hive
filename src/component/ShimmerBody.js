const ShimmerSearch = () => {
  return (
    <div className="flex justify-center py-10">
      <div className="h-10 w-80 px-2 bg-purple-100 rounded-md" />
    </div>
  );
};

const ShimmerRestroCard = () => {
  return (
    <div className="w-72 m-2 h-80 rounded-md border bg-gray-100 border-gray-200  hover:shadow-lg hover:bg-gray-200 hover:border-gray-300" />
  );
};

const ShimmerBody = () => {
  return (
    <>
      <ShimmerSearch />

      <div className="xl:px-16 sm:px-10 flex flex-wrap justify-center">
        {new Array(15).fill("").map((e, id) => {
          return <ShimmerRestroCard key={id} />;
        })}
      </div>
    </>
  );
};

export default ShimmerBody;
