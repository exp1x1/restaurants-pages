import "./reset.css";
import "./style.css";

const addChild = (node, element, className = "", textContent = "") => {
  const nodeEle = document.querySelector(node);

  const childEle = document.createElement(element);
  if (className[0] === "#") {
    childEle.setAttribute("id", className.slice(1));
  } else if (className.length !== 0) {
    childEle.setAttribute("class", className);
  }
  nodeEle.appendChild(childEle);
  if (textContent !== "") {
    childEle.textContent = `${textContent}`;
  }
  return childEle;
};

const clearContainer = () => {
  const container = document.getElementById("container");
  container.replaceChildren();
};

const navBar = (() => {
  const createNavBar = () => {
    addChild("#content", "nav", "");
  };

  const createLogo = () => {
    addChild("nav", "a", "logo");
    const node = addChild(".logo", "img", "logo-img");
    node.src = "../pic/kop-logo.png";
  };

  const createLinkBar = () => {
    addChild("nav", "div", "linkbar");
    addChild(".linkbar", "a", "#home", "Home");
    addChild(".linkbar", "a", "#menu", "Menu");
    addChild(".linkbar", "a", "#contact", "Contact");
  };

  const createContainer = () => {
    addChild("#content", "div", "#container");
  };

  const renderNavBar = () => {
    createNavBar();
    createLogo();
    createLinkBar();
    createContainer();
    homePage.renderHomePage();
  };

  return { renderNavBar };
})();

const homePage = (() => {
  const createHomeContainer = () => {
    const node = addChild("#container", "div", "#homepage");
    node.style.backgroundImage = "url(../pic/home.jpg)";
  };

  const createLeftSide = () => {
    addChild("#homepage", "div", "leftside");
    // addChild(".leftside", "div", "leftside");
    addChild(".leftside", "span", "", "WE");
    addChild(".leftside", "span", "", "MAKE IT");
    addChild(".leftside", "span", "", "POP!");
  };

  // const createRightSide = () => {};

  const renderHomePage = () => {
    clearContainer();
    createHomeContainer();
    createLeftSide();
  };

  return { renderHomePage };
})();

const menuPage = (() => {
  const createHomeContainer = () => {
    addChild("#container", "div", "#menupage");
  };

  const createFirstPage = () => {
    const node = addChild("#menupage", "div", "#firstpage");
    node.style.backgroundImage = "url(../pic/samosa.jpg)";

    addChild("#firstpage", "h1", "", "SAMOSA");
  };

  const createSecondPage = () => {
    const node = addChild("#menupage", "div", "#secondpage");
    node.style.backgroundImage = "url(../pic/curry.jpg)";

    addChild("#secondpage", "h1", "", "CURRY");
  };

  const renderMenuPage = () => {
    clearContainer();
    createHomeContainer();
    createFirstPage();
    createSecondPage();
  };

  return { renderMenuPage };
})();

navBar.renderNavBar();
// menuPage.renderMenuPage();

document.getElementById("home").addEventListener("click", () => {
  homePage.renderHomePage();
});

document.getElementById("menu").addEventListener("click", () => {
  menuPage.renderMenuPage();
});
