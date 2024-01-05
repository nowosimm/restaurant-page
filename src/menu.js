import makeNavbarElement from "./navbar";

export default function menuPage() {
    var contentDiv = document.getElementById("content");
    contentDiv.replaceChildren();

    // header

    var navBar = makeNavbarElement();
    contentDiv.appendChild(navBar);

    // body

    var menuContainer = document.createElement("div");
    menuContainer.classList.add("menuContainer");

    // item one
    var itemOne = document.createElement("div");
    itemOne.classList.add("itemOne");

    var itemOneContainer = document.createElement("div");
    itemOneContainer.classList.add("itemOneContainer");

    var itemOneText = document.createElement("h3");
    itemOneText.classList.add("text");
    itemOneText.textContent = "Chocolate Chip Cookie"

    var itemOneDetails = document.createElement("p");
    itemOneDetails.classList.add("text");
    itemOneDetails.textContent = "Gooey chocolate chip cookies topped with flakey sea salt";

    var itemOneImg = document.createElement("img");
    itemOneImg.classList.add("imageOne");
    itemOneImg.src = "images/chocolateChipCookies.jpg";

    itemOneContainer.appendChild(itemOneText);
    itemOneContainer.appendChild(itemOneDetails);
    itemOne.appendChild(itemOneContainer);
    itemOne.appendChild(itemOneImg);
    menuContainer.appendChild(itemOne);

     // item two
     var itemTwo = document.createElement("div");
     itemTwo.classList.add("itemTwo");
 
     var itemTwoContainer = document.createElement("div");
     itemTwoContainer.classList.add("itemTwoContainer");
 
     var itemTwoText = document.createElement("h3");
     itemTwoText.classList.add("text");
     itemTwoText.textContent = "Sourdough Bread"
 
     var itemTwoDetails = document.createElement("p");
     itemTwoDetails.classList.add("text");
     itemTwoDetails.textContent = "Freshly baked Sourdough bread with a flaky, golden crust";
 
     var itemTwoImg = document.createElement("img");
     itemTwoImg.classList.add("imageTwo");
     itemTwoImg.src = "images/sourdough.png";
 
     itemTwoContainer.appendChild(itemTwoText);
     itemTwoContainer.appendChild(itemTwoDetails);
     itemTwo.appendChild(itemTwoContainer);
     itemTwo.appendChild(itemTwoImg);
     menuContainer.appendChild(itemTwo);

     // item three
     var itemThree = document.createElement("div");
     itemThree.classList.add("itemThree");
 
     var itemThreeContainer = document.createElement("div");
     itemThreeContainer.classList.add("itemThreeContainer");
 
     var itemThreeText = document.createElement("h3");
     itemThreeText.classList.add("text");
     itemThreeText.textContent = "Pain Au Chocolat"
 
     var itemThreeDetails = document.createElement("p");
     itemThreeDetails.classList.add("text");
     itemThreeDetails.textContent = "Buttery, flaky, golden croissant filled with rich dark chocolate";
 
     var itemThreeImg = document.createElement("img");
     itemThreeImg.classList.add("imageThree");
     itemThreeImg.src = "images/painAuChocolat.jpeg";
 
     itemThreeContainer.appendChild(itemThreeText);
     itemThreeContainer.appendChild(itemThreeDetails);
     itemThree.appendChild(itemThreeContainer);
     itemThree.appendChild(itemThreeImg);
     menuContainer.appendChild(itemThree);

      // item Four
      var itemFour = document.createElement("div");
      itemFour.classList.add("itemFour");
  
      var itemFourContainer = document.createElement("div");
      itemFourContainer.classList.add("itemFourContainer");
  
      var itemFourText = document.createElement("h3");
      itemFourText.classList.add("text");
      itemFourText.textContent = "Assorted Pastries"
  
      var itemFourDetails = document.createElement("p");
      itemFourDetails.classList.add("text");
      itemFourDetails.textContent = "Daily offerings of savory fillings inside our flaky puff pastries";
  
      var itemFourImg = document.createElement("img");
      itemFourImg.classList.add("imageFour");
      itemFourImg.src = "images/pastries.jpeg";
  
      itemFourContainer.appendChild(itemFourText);
      itemFourContainer.appendChild(itemFourDetails);
      itemFour.appendChild(itemFourContainer);
      itemFour.appendChild(itemFourImg);
      menuContainer.appendChild(itemFour);

    contentDiv.appendChild(menuContainer);
}