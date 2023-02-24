//Image Array Look Up
let index = 0;
let imgArr = [  ["imgs/dice-six-faces-one.png",     "Image of Dice, Face One"   ],
                ["imgs/dice-six-faces-two.png",     "Image of Dice, Face Two"   ],
                ["imgs/dice-six-faces-three.png",   "Image of Dice, Face Three" ],
                ["imgs/dice-six-faces-four.png",    "Image of Dice, Face Four"  ],
                ["imgs/dice-six-faces-five.png",    "Image of Dice, Face Five"  ],
                ["imgs/dice-six-faces-six.png",     "Image of Dice, Face Six"   ]];


//HTML Elements
let divImg = document.getElementById("img");
let elementImg = document.createElement("img");
divImg.appendChild(elementImg);

let img = document.getElementsByTagName("img")[0];
let imgDescription = document.getElementById("description");
let h1 = document.getElementById("countDown");

//Timer
let timer = setInterval(() => updateImage(1), 5000)
let count = 5;
let countDown = setInterval(funcCountDown, 1000);

//Functions
function updateImage(num) {
    clearInterval(timer);
    timer = setInterval(() => updateImage(1), 5000);

    clearInterval(countDown);
    countDown = setInterval(funcCountDown, 1000);
    count = 5;

    index += num;
    if (index < 0) {
        index = imgArr.length-1;
    }   
    if (index >= imgArr.length) {
        index = 0;
    }

    img.src = imgArr[index][0];
    imgDescription.textContent = imgArr[index][1]
    h1.textContent = count;
}

function funcCountDown() {
    count--;
    h1.textContent = "" + count;
}



//Buttons
let previous = document.getElementById("previous");
let next = document.getElementById("next");

previous.addEventListener("click", () => updateImage(-1));
next.addEventListener("click", () => updateImage(1));


//TODO:
// - Add Countdown for img switch 
// - reset counter if button is pressed
// - Add Description of Image Below Img (so need to make a 2D array for two string per img)

//Run this on start
updateImage(0);