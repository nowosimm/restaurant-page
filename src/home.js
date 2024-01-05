import makeNavbarElement from "./navbar";

export default function homePage() {
    var contentDiv = document.getElementById("content");
    contentDiv.replaceChildren();

    var navBar = makeNavbarElement();
    contentDiv.appendChild(navBar);

    
    // image
    var mainImgContainer = document.createElement("div");
    mainImgContainer.classList.add("mainImgContainer");

    var mainImg = document.createElement("img");
    mainImg.classList.add("mainImg");
    mainImg.src = "images/backgroundImage.jpeg";
    
    
    
    mainImgContainer.appendChild(mainImg);
    contentDiv.appendChild(mainImgContainer);
}
