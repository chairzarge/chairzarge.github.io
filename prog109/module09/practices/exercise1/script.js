




let img = document.getElementsByTagName("img")[0];


img.src = "imgs/redsquare.png";


img.onmouseover = function () { img.src = "imgs/whitesquare.png" }

img.onmouseout = function () { img.src = "imgs/redsquare.png"}