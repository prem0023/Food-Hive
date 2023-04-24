import { logo } from "./constant";
import { Link } from "react-router-dom";

const Title = () => {
  return (
    <>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo"></img>
        </Link>
      </div>
    </>
  );
};

const Header = () => {
  return (
    <>
      <div className="header">
        <Title />
        <div className="navbar">
          <ul>
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <Link to={"/about"}>About</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contact</Link>
            </li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
