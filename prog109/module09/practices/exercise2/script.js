

let areas = document.getElementsByTagName("area");

let listItems = document.getElementsByTagName("li");


for (let i = 0; i < areas.length; i++) {
    areas[i].addEventListener("click", clickedArea);
}



function clickedArea(event) {
    event.target.classList.add("clicked");
    for (let i = 0; i < listItems.length; i++) {
        if (listItems[i].getAttribute("name") == event.target.getAttribute("name")) {
            listItems[i].classList.add("crossedOut");
        }
    }

    for (let i = 0; i < listItems.length; i++) {
        if (!listItems[i].classList.contains("crossedOut")) {
            return;
        }
    }

    if (confirm("You have completed the iSpy! Would you like to replay?")) {
        location.reload();
    }
}