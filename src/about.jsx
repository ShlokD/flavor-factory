const About = () => {
  return (
    <div className="flex flex-col min-h-screen w-full text-white">
      <h1 className="text-4xl font-bold text-center">ABOUT</h1>
      <div className="flex flex-col lg:flex-row mt-4 p-4">
        <img
          className="rounded-lg border-2 border-white bg-white p-2 lg:w-1/2"
          src="/profile.jpg"
          alt="Isabella Pal Profile"
        />
        <div className="py-8 text-center">
          <h2 className="font-bold text-4xl ">Isabella Pal</h2>
          <p>Chef and Owner</p>
          <p className="mt-8 text-lg">
            Chef Isabella Pal has a passion for food that began at a young age.
            She grew up in Mangalore, where he/she was exposed to a variety of
            different cuisines. After graduating from Le Prive Banq, Chef Pal
            worked in several prestigious restaurants before opening the Flavor
            Factory.
          </p>

          <p className="mt-4 text-lg">
            Her cooking philosophy is to create dishes that are both delicious
            and visually appealing. He/She uses fresh, seasonal ingredients and
            traditional cooking techniques to create dishes that are unique and
            memorable.
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-4 p-4">
        <img
          className="rounded-lg border-2 border-white bg-white p-2 lg:w-1/2"
          src="/about2.jpg"
          alt="Ingredients"
        />
        <div className="p-2">
          <h2 className="font-bold text-4xl text-center py-8">Ingredients</h2>
          <ul className="list pl-0 flex flex-col gap-4 lg:text-center">
            <li>
              <h3 className="text-2xl font-bold py-2">Own Vegetable Garden</h3>
              <p className="pt-6">
                Our own garden ensures that dishes are made with the freshest
                ingredients and are prepared with great care
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-bold py-2">
                Spices from Local Farms
              </h3>
              <p className="pt-6">
                The best spices procured from local farms to keep our carbon
                footprint low
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-bold py-2">
                Ethically Sourced Meat and Seafood
              </h3>
              <p className="pt-6">
                We take pride in sourcing grass-fed poultry and partner with
                ethical fisheries for the best seafood
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row mt-4 p-4">
        <img
          className="rounded-lg border-2 border-white bg-white p-2 lg:w-1/2"
          src="/about3.jpg"
          alt="About Restaurant"
        />
        <div className="lg:p-2">
          <h2 className="font-bold text-4xl text-center py-8">Atmosphere</h2>
          <ul className="list pl-0 flex flex-col gap-4 lg:text-center">
            <li>
              <h3 className="text-2xl font-bold py-2">The Restaurant</h3>
              <p className="pt-6">
                A sophisticated and stylish restaurant, with a menu that offers
                a wide selection of wines, beers, and cocktails
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-bold py-2">The Bar</h3>
              <p className="pt-6">
                The perfect spot to relax, unwind, and enjoy a night out with
                friends.
              </p>
            </li>
            <li>
              <h3 className="text-2xl font-bold py-2">The Terrace</h3>
              <p className="pt-6">
                The perfect place to relax, unwind, and enjoy the city lights.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
