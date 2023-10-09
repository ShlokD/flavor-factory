import { useState } from "preact/hooks";
const MENUS = {
  CLASSIC: {
    title: "Classic",
    image: "/menu1.jpg",
    dishes: [
      {
        type: "Appetizer",
        items: ["Chicken Tikka Masala", "Vegetable Samosas"],
      },
      {
        type: "Main Course",
        items: [
          "Dal Makhani",
          "Butter Chicken",
          "Chana Masala",
          "Lamb Biryani",
          "Assorted Rotis",
        ],
      },
      {
        type: "Dessert",
        items: ["Rasmalai", "Gulab Jamun", "Kulfi"],
      },
    ],
    prices: [
      "Rs.2900 without wines",
      "Rs 3500 with Local Wines",
      "Rs 4900 with International Wines",
    ],
  },
  VEGETARIAN: {
    title: "Vegetarian",
    image: "/menu2.jpg",
    dishes: [
      {
        type: "Appetizer",
        items: ["Paneer Tikka", "Vegetable Samosas"],
      },
      {
        type: "Main Course",
        items: [
          "Dal Makhani",
          "Malai Kofta",
          "Chana Masala",
          "Vegetable Biryani",
          "Assorted Rotis",
        ],
      },
      {
        type: "Dessert",
        items: ["Rasmalai", "Gulab Jamun", "Kulfi"],
      },
    ],
    prices: [
      "Rs.2400 without wines",
      "Rs 3000 with Local Wines",
      "Rs 4400 with International Wines",
    ],
  },
};
const Menu = () => {
  const menuKeys = Object.keys(MENUS);
  const [selectedMenu, setSelectedMenu] = useState(menuKeys[0]);
  const selected = MENUS[selectedMenu];
  return (
    <div className="flex flex-col min-h-screen w-full text-white">
      <h1 className="text-4xl font-bold text-center my-4">MENU</h1>
      <div className="flex gap-2 items-center justify-center my-4">
        {menuKeys.map((menuTitle, i) => {
          const isSelected = menuTitle === selectedMenu;
          return (
            <div key={`menu-type-${i}`}>
              <input
                type="radio"
                id={menuTitle}
                name="menu-type"
                value={menuTitle}
                checked={isSelected}
                onChange={() => setSelectedMenu(menuTitle)}
                className="hidden"
              />
              <label
                className={`${
                  isSelected ? "bg-green-800 text-white" : "bg-white text-black"
                } border-2 p-4  text-lg border-0 font-bold`}
                htmlFor={menuTitle}
              >
                {MENUS[menuTitle].title}
              </label>
            </div>
          );
        })}
      </div>
      <div className="flex flex-col items-center gap-2">
        <img src={selected.image} alt="Menu Image" className="p-2 rounded-lg" />
        {selected.dishes.map((dish, i) => {
          return (
            <>
              <div key={`category-${i}`}>
                <h2 className="text-4xl text-center py-4">{dish.type}</h2>
                {dish.items.map((item, i) => {
                  return (
                    <p className="text-xl text-center p-2" key={`item-${i}`}>
                      {item}
                    </p>
                  );
                })}
              </div>
              <hr className="bg-white w-5/6" />
            </>
          );
        })}
        {selected.prices.map((price, i) => {
          return (
            <p className="text-sm text-center p-2" key={`price-${i}`}>
              {price}
            </p>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
