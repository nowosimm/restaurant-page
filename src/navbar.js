import contactPage from "./contact";
import homePage from "./home";
import menuPage from "./menu";

export default function makeNavbarElement() {
    var navBar = document.createElement("div");
    navBar.classList.add("navBar")

    var headerDiv = document.createElement("div");
    headerDiv.classList.add("headerDiv");

    var header = document.createElement("h1")
    header.textContent = "Maddie's Market"

    var headerText= document.createElement("p");
    headerText.classList.add("headerText");
    headerText.textContent = "serving fresh pastries daily"
    
    // buttons
    var buttonContainer = document.createElement('div');
    buttonContainer.classList.add("buttonContainer");

    var homeButton = document.createElement("button");
    homeButton.type = "button";
    homeButton.classList.add("buttons");
    homeButton.textContent = "home";
    homeButton.onclick = homePage;

    var menuButton = document.createElement("button");
    menuButton.type = "button";
    menuButton.classList.add("buttons");
    menuButton.textContent = "menu";
    menuButton.onclick = menuPage;

    var contactButton = document.createElement("button");
    contactButton.type = "button";
    contactButton.classList.add("buttons");
    contactButton.textContent = "contact";
    contactButton.onclick = contactPage;

    buttonContainer.appendChild(homeButton);
    buttonContainer.appendChild(menuButton);
    buttonContainer.appendChild(contactButton);
    
    
    headerDiv.appendChild(header);
    navBar.appendChild(headerDiv);
    headerDiv.appendChild(headerText);
    navBar.appendChild(buttonContainer);
    
    return navBar;
}