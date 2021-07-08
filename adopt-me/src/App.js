import React from "react";
import ReactDOM from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "logo" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Max",
      animal: "Cat",
      breed: "Arabian Mau",
    }),
    React.createElement(Pet, {
      name: "Leo",
      animal: "Cat",
      breed: "Arabian Mau",
    }),
    React.createElement(Pet, {
      name: "Sherman",
      animal: "Dog",
      breed: "Pug",
    }),
    React.createElement(Pet, {
      name: "Penny",
      animal: "Dog",
      breed: "Pug",
    }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
