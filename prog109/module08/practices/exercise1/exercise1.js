var elements = document.getElementsByClassName('hot');
// Find hot items

if (elements.length > 2) {
    // If 3 or more are found

    var el = elements[2];
    // Select the third one from the NodeList
    el.className = 'cool';
    // Change the value of its class attribute

}



var listElements = document.getElementsByTagName("ul")[0].children;

for (let i = 0; i < listElements.length; i++) {
    listElements[i].textContent += " - " + listElements[i].className;
}