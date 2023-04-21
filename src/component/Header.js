import { logo } from "./constant";

const Title = () => {
  return (
    <>
      <div className="logo">
        <a href="/">
          <img src={logo} alt="logo"></img>
        </a>
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
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
