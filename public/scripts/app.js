"use strict";

var rootElement = document.getElementById("app");

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "This Is Header"
  ),
  React.createElement(
    "p",
    null,
    "This Is Description Of Page"
  )
);

ReactDOM.render(template, rootElement);
