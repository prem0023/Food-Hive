import "./style.css";
import React from "react";
import Header from "./component/Header";
import Body from "./component/Body";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

export default App;

// var traverse = () => {
//   console.log("Entered");
//   var arr = ["I am good", " I am very good", "I am excellant"];

//   var list = document.createElement("ul");

//   var str = "";
//   arr.map((value) => {
//     str += "<li>" + value + "</li>";
//   });
// console.log(str);

// var div = document.createElement("div");
// console.log(div);
// div.innerHTML(str);
// console.log(div);

//   const root = document.getElementById("root");
//   root.innerHTML += str;
//   console.log("Exit");
// };

// traverse();
