const Home = () => {
  return (
    <div className="flex flex-col items-center text-white lg:mt-20">
      <h1 className="font-bold text-6xl break-words text-center p-6 mt-20 bg-black bg-opacity-50 rounded-lg w-3/4">
        Welcome to Flavor Factory
      </h1>
      <p
        className="text-2xl text-center p-2 break-words mt-20"
        style={{
          filter: `brightness(2)`,
        }}
      >
        A Culinary Experience by Isabella Pal
      </p>
    </div>
  );
};

export default Home;
