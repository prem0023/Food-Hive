import { Link } from "react-router-dom";
import facebook from "../utils/facebook.png";
import instagram from "../utils/instagram.png";
import linkedin from "../utils/linkedin.png";
import twitter from "../utils/twitter.png";
import github from "../utils/github.png";
import whatsapp from "../utils/whatsapp.png";

const Footer = () => {
  return (
    <>
      <div className="flex justify-end w-screen h-20 mt-40 bg-purple-900">
        <ul className="flex items-center pr-5">
          <li className="px-3">
            <Link
              target="_blank"
              to={"https://www.linkedin.com/in/phanishwarnath/"}
            >
              <img src={linkedin} alt="linkedIn" />
            </Link>
          </li>
          <li className="px-3">
            <Link target="_blank" to={"https://github.com/prem0023"}>
              <img src={github} alt="github" />
            </Link>
          </li>
          <li className="px-3">
            <Link target="_blank" to={"https://twitter.com/phanishwar_nath"}>
              <img src={twitter} alt="twitter" />
            </Link>
          </li>
          <li className="px-3">
            <Link target="_blank" to={"https://www.whatsapp.com/"}>
              <img src={whatsapp} alt="whatsapp" />
            </Link>
          </li>
          <li className="px-3">
            <Link target="_blank" to={"https://www.instagram.com/prem_0023/"}>
              <img src={instagram} alt="instagram" />
            </Link>
          </li>
          <li className="px-3">
            <Link
              target="_blank"
              to={"https://www.facebook.com/phanishwar.nath"}
            >
              <img src={facebook} alt="facebook" />
            </Link>
          </li>
        </ul>
      </div>
      <div className=" w-screen h-96 bg-slate-900">
        <h2 className="font-bold text-xl p-4 text-slate-50">About</h2>
        <p className="text-lg px-4 text-slate-50">
          I am a seasoned frontend developer with 2 years of experience
          specializing in React development. I possess expertise in React,
          Redux, Tailwind CSS, JavaScript, MongoDB, Material UI, Bootstrap,
          Jest, and Java data structures. My passion lies in crafting intuitive
          and visually appealing user interfaces that enhance the overall user
          experience. With a strong foundation in frontend technologies, I excel
          at translating design concepts into fully functional and responsive
          web applications. I am dedicated to staying up-to-date with the latest
          industry trends and continuously expanding my skillset. I thrive in
          collaborative environments and strive to deliver high-quality code
          that meets client requirements.
        </p>
      </div>
      <div className=" w-screen h-14 bg-slate-950 flex justify-center">
        {" "}
        <span className="flex items-center text-white">
          {" "}
          ©️ 2023 Copyright : Phanishwar Nath{" "}
        </span>
      </div>
    </>
  );
};

export default Footer;
