var rootElement = document.getElementById("app");

var template = (
  <div>
    <h1>This Is Header</h1>
    <p>This change is made on remote repo</p>
    <p>This Is Description Of Page</p>
  </div>
);

ReactDOM.render(template, rootElement);
