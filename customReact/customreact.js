function customRender(reactElement, maincontainer) {
  const domElement = document.createElement(reactElement.type);
  domElement.innerHTML = reactElement.Children;
  for (const prop in reactElement.props) {
    domElement.setAttribute(prop, reactElement.props[prop]);
  }
  maincontainer.appendChild(domElement);
}

const reactElement = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  Children: "click me to visit google",
};

const maincontainer = document.getElementById("root");
customRender(reactElement, maincontainer);
