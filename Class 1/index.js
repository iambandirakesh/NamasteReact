const root = ReactDOM.createRoot(document.querySelector("#root"));
let heading = React.createElement("h1", { id: "heading" }, [
  React.createElement("span", null, "Hello "),
  React.createElement("span", null, "World"),
]);
root.render(heading);
