import Router from "preact-router";
import Home from "./home";
import About from "./about";
import Menu from "./menu";
import Gallery from "./gallery";
import Contact from "./contact";
import { Link } from "preact-router/match";
import { useEffect, useState } from "preact/hooks";

const detectMob = () => {
  return window.innerWidth <= 800;
};
export function App() {
  const [mobile, setMobile] = useState(detectMob());
  const [showMenu, setShowMenu] = useState(false);
  const [pathname, setPathname] = useState(window.location.pathname);
  const toggleMenu = () => setShowMenu((prev) => !prev);

  const handleResize = () => {
    setMobile(detectMob());
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [showMenu]);
  return (
    <div
      className={`flex flex-col lg:flex-row min-h-screen w-full bg-black  ${
        pathname === "/" ? "bg-image" : ""
      }`}
    >
      <div className="lg:hidden">
        <button
          className="p-4 m-2 bg-white rounded-lg"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          <img src="/menu.png" height={32} width={32} alt="" />
        </button>
      </div>
      <nav
        className={`${
          showMenu || !mobile
            ? "flex flex-col min-h-screen w-full lg:w-1/4 justify-around items-center text-4xl bg-black text-white absolute top-0 left-0 lg:relative z-10"
            : "hidden"
        }`}
      >
        <button
          className="p-4 rounded-lg font-bold lg:hidden"
          onClick={() => setShowMenu(false)}
        >
          X
        </button>
        <Link
          className="p-4 text-center  w-2/3"
          activeClassName="bg-white text-gray-500 font-bold"
          href="/"
        >
          Home
        </Link>
        <Link
          className="p-4 text-center  w-2/3"
          activeClassName="bg-white text-gray-500 font-bold"
          href="/about"
        >
          About
        </Link>
        <Link
          className="p-4 text-center  w-2/3"
          activeClassName="bg-white text-gray-500 font-bold"
          href="/menu"
        >
          Menu
        </Link>
        <Link
          className="p-4 text-center  w-2/3"
          activeClassName="bg-white text-gray-500 font-bold"
          href="/gallery"
        >
          Gallery
        </Link>
        <Link
          className="p-4 text-center  w-2/3"
          activeClassName="bg-white text-gray-500 font-bold"
          href="/contact"
        >
          Contact
        </Link>
      </nav>
      <main className="lg:w-3/4">
        <Router
          onChange={() => {
            setShowMenu(false);
            setPathname(window.location.pathname);
          }}
        >
          <Home path="/"></Home>
          <About path="/about"></About>
          <Menu path="/menu"></Menu>
          <Gallery path="/gallery"></Gallery>
          <Contact path="/contact"></Contact>
        </Router>
      </main>
    </div>
  );
}

export default Home;
