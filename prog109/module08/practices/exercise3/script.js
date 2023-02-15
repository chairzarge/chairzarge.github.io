let imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", e => {
        imgs[i].parentElement.remove();
    });
}





document.querySelector("button").addEventListener("click", newEntry);

document.querySelector("input").addEventListener("keypress", e => {
    if (e.key === "Enter") {
        newEntry();
    } 
});



function newEntry() {

    let entryText = document.querySelector("input").value;

    document.querySelector("input").value = "";

    // Create a new element and store it in a variable.
    var newEl = document.createElement('li');

    // Create a text node and store it in a variable.
    var newText = document.createTextNode(entryText);

    // Attach the new text node to the new element.
    newEl.appendChild(newText);

    // Find the position where the new element should be added.
    var position = document.getElementsByTagName('ul')[0];

    newEl.setAttribute("id",document.getElementsByTagName('li').length+1);

    newEl.innerHTML += "<img src=\"imgs/icon-trash.png\">";

    // Insert the new element into its position.
    position.appendChild(newEl);

    let img = document.getElementsByTagName('ul')[0].lastChild.querySelector("img")
    img.addEventListener("click", e => {
        img.parentElement.remove();
    });
}