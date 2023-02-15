// Select the starting point and find its siblings.
var startItem = document.getElementById('two');
var prevItem = startItem.previousElementSibling;
var nextItem = startItem.nextElementSibling;

// Change the values of the siblings' class attributes.
prevItem.className = 'complete';
prevItem.innerHTML += `<img src="imgs/icon-trash.png">`
nextItem.className = 'cool';




let imgs = document.getElementsByTagName("img");

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", e => {
        imgs[i].parentElement.remove();
    });
}