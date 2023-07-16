import { logo } from "./constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link to="/">
      <img
        className="h-20 w-20 mx-5 my-2 rounded-md hover:drop-shadow-lg"
        src={logo}
        alt="logo"
      ></img>
    </Link>
  );
};

const Header = () => {
  const isOnline = useOnline();
  const store = useSelector((store) => store.cart.items);
  return (
    <>
      <div className="flex justify-between bg-purple-100 drop-shadow-lg">
        <Title />
        <ul className="flex items-center pr-5 ">
          <li>{isOnline ? "🟢" : "🔴"}</li>
          <li className="px-3 hover:font-bold">
            <Link to={"/"}>Home</Link>
          </li>

          <li className="px-3 hover:font-bold">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-3 hover:font-bold">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-3 hover:font-bold">
            <Link to={"./Instamart"}>Instamart</Link>
          </li>
          <li className="px-3 hover:font-bold">
            <Link to={"/cart"}>Cart-{store.length}</Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Header;
