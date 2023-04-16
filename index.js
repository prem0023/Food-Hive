import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

// var h1 = React.createElement("h2", { id: "title" }, "Heading 1");
// var h2 = React.createElement("h2", { id: "title2" }, "Heading 2");
// var h3 = React.createElement("h2", { id: "title3" }, "Heading 3");

// const div = React.createElement("div", { className: "title" }, h1, h2, h3);

// const Heading = () => {
//   return (
//     <div className="title1">
//       {/* {title} */}
//       <h2>Heading 1 in JSX</h2>
//       <h2>Heading 2 in JSX</h2>
//       <h2>Heading 3 in JSX</h2>
//     </div>
//   );
// };

// const title = (
//   <div className="title1">
//     <Heading />
//     <h2>Heading in JSX</h2>
//     <h2>Heading in JSX</h2>
//     <h2>Heading in JSX</h2>
//   </div>
// );

// var heading = document.createElement("h1");
// heading.innerHTML = "Hello World";
// document.getElementById("root").appendChild(heading);

//   var newH1 = document.createElement("h1");
//   var textNode = document.createTextNode("Hello World");
//   newH1.appendChild(textNode);
//   document.getElementById("root").appendChild(newH1);

// import MapData from "./Mapdata";

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <>
//     <h1>Hello</h1>
//     <MapData />
//   </>
// );
