import makeNavbarElement from "./navbar";

export default function contactPage() {
    var contentDiv = document.getElementById("content");
    contentDiv.replaceChildren();

    var contactContainer = document.createElement("div");
    contactContainer.classList.add("contactContainer");

    var navBar = makeNavbarElement();
    contentDiv.appendChild(navBar);


    // image
    var locationImg = document.createElement("img");
    locationImg.classList.add("locationImg");
    locationImg.src = "images/location.jpeg";

    // subheader
    var subheaderContainer = document.createElement("div");
    subheaderContainer.classList.add("subheaderContainer");

        // hours
    var hoursContainer = document.createElement("div");
    
    var hoursHeader = document.createElement("p");
    hoursHeader.classList.add("subheader");
    hoursHeader.textContent = "Hours"

    var openHours = document.createElement("p");
    openHours.textContent = "wednesday - sunday: 8a - 2p"

    var closedHours = document.createElement("p");
    closedHours.textContent = "monday + tuesday: closed"

        // address
    
    var addressContainer = document.createElement("div");
    addressContainer.classList.add("addressInfo");

    var addressHeader = document.createElement("p");
    addressHeader.classList.add("subheader");
    addressHeader.textContent = "Address"

    var address = document.createElement("p");
    address.textContent = "123 dookie ave"

    var address2= document.createElement("p");
    address2.textContent = "cincinnati, oh 45219";

        // phone

    var contact = document.createElement("div");
    contact.classList.add("phoneContainer");

    var contactHeader = document.createElement("p");
    contactHeader.classList.add("subheader");
    contactHeader.textContent = "Contact"

    var phone = document.createElement("p");
    phone.textContent = "734.513.4444"

    var email= document.createElement("p");
    email.textContent = "madisons@gmail.com";

    
    // append children
    contactContainer.appendChild(locationImg);
    contactContainer.appendChild(subheaderContainer);
    subheaderContainer.appendChild(hoursContainer);
    subheaderContainer.appendChild(addressContainer);
    subheaderContainer.appendChild(contact);
   

    hoursContainer.appendChild(hoursHeader);
    hoursContainer.appendChild(openHours);
    hoursContainer.appendChild(closedHours);
    
    addressContainer.appendChild(addressHeader);
    addressContainer.appendChild(address);
    addressContainer.appendChild(address2);

    contact.appendChild(contactHeader);
    contact.appendChild(phone);
    contact.appendChild(email);

    contentDiv.appendChild(contactContainer);

} 

