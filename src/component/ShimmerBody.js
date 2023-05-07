const ShimmerSearch = () => {
  return (
    <div className="flex justify-center py-16">
      <div className="shadow-lg h-10 w-80 bg-purple-100 rounded-md" />
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

      <div className="px-52 flex flex-wrap justify-between">
        {new Array(15).fill("").map((e, id) => {
          return <ShimmerRestroCard key={id} />;
        })}
      </div>
    </>
  );
};

export default ShimmerBody;
