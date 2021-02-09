var rootElement = document.getElementById("app");

var template = React.createElement("h1", {
    align: "center",
    id: "dev",
    className: "app"
  }, "hello world");

ReactDOM.render(template, rootElement);