const Gallery = () => {
  const images = new Array(6).fill(0);
  return (
    <div className="flex flex-col min-h-screen w-full">
      <h1 className="text-center text-4xl font-bold p-2 text-white">Gallery</h1>
      <div className="grid grid-cols-2 gap-2 place-content-center">
        {images.map((_, i) => {
          return (
            <img
              key={`image-${i}`}
              alt={`Image ${i + 1} of ${images.length}`}
              src={`/gallery${i + 1}.jpg`}
              loading="lazy"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
