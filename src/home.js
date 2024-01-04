export default function homePage() {
    var contentDiv = document.getElementById("content");

    // background image

    var backgroundImg = document.createElement("div");
    backgroundImg.classList.add("backgroundImg");

    // header
    
    var headerText = document.createElement("h1");
    headerText.classList.add("header");
    headerText.textContent = "Maddie's Market";
    
    backgroundImg.appendChild(headerText);

    // buttons

    var buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttonContainer") 

    var homeButton = document.createElement("button");
    homeButton.classList.add("buttons");
    homeButton.textContent = "home";

    buttonContainer.appendChild(homeButton);

    var menuButton = document.createElement("button");
    menuButton.classList.add("buttons");
    menuButton.textContent = "menu";

    buttonContainer.appendChild(menuButton);

    var contactButton = document.createElement("button");
    contactButton.classList.add("buttons");
    contactButton.textContent = "contact";

    buttonContainer.appendChild(contactButton);

    backgroundImg.appendChild(buttonContainer);


    contentDiv.appendChild(backgroundImg);
}