import { logo } from "./constant";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const Title = () => {
  return (
    <Link to="/">
      <img className="w-24 h-24 m-5" src={logo} alt="logo"></img>
    </Link>
  );
};

const Header = () => {
  const isOnline = useOnline();
  return (
    <>
      <div className="flex justify-between bg-purple-100 drop-shadow-lg">
        <Title />
        <ul className="flex items-center pr-5 ">
          <li>{isOnline ? "🟢" : "🔴"}</li>
          <li className="px-3">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-3">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-3">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-3">
            <Link to={"./Instamart"}>Instamart</Link>
          </li>
          <li className="px-3">Cart</li>
        </ul>
      </div>
    </>
  );
};

export default Header;
