let rolledDice = Array(6);

let possibleSelectedDice = [];

let confirmedSelectedDice = [];

let proposedPoints = 0;

let currentPoints = 0;

let canReroll = true;

let imgNames = {
    1: "imgs/dice-six-faces-one.png",
    2: "imgs/dice-six-faces-two.png",
    3: "imgs/dice-six-faces-three.png",
    4: "imgs/dice-six-faces-four.png",
    5: "imgs/dice-six-faces-five.png",
    6: "imgs/dice-six-faces-six.png",
}

let rolledDiceBox = document.getElementById("rolledDice")
let possibleSelectedDiceBox = document.getElementById("possible");
let confirmedSelectedDiceBox = document.getElementById("confirmed");
let pointsBox = document.getElementById("points");
let btn = document.getElementById("rerollButton");

function updateDisplay() {
    let mes = "";
    for (let i = 0; i < rolledDice.length; i++) {
        mes += `<img draggable="false" id="${i}" src="${imgNames[rolledDice[i]]}">`;
    }
    rolledDiceBox.innerHTML = mes;

    mes = "";
    for (let i = 0; i < possibleSelectedDice.length; i++) {
        mes += `<img draggable="false" id="${i}" src="${imgNames[possibleSelectedDice[i]]}">`;
    }
    possibleSelectedDiceBox.innerHTML = mes;

    mes = "";
    for (let i = 0; i < confirmedSelectedDice.length; i++) {
        mes += `<img draggable="false" id="${i}" src="${imgNames[confirmedSelectedDice[i]]}">`;
    }
    confirmedSelectedDiceBox.innerHTML = mes;

    let imgs = document.querySelectorAll("img");
    for (let i = 0; i < imgs.length; i++) {
        imgs[i].addEventListener("click", clickImg);
    }

    pointsBox.innerHTML = `Points: ${proposedPoints}`;

    if (!canReroll) {
        btn.classList.add("disabled");
        btn.innerHTML = `<img src="imgs/Red_X.svg.png">`;
    } else {
        btn.classList.remove("disabled");
        btn.innerHTML = `Reroll!`;
    }
}


function clickImg(event) {
    if (event.target.parentElement.id == "rolledDice") {
        let temp = rolledDice.splice(event.target.id,1)[0];
        possibleSelectedDice.push(temp);
    }

    if (event.target.parentElement.id == "possible") {
        let temp = possibleSelectedDice.splice(event.target.id,1)[0];
        rolledDice.push(temp);
    }

    scoreTally();
    updateDisplay();
}

btn.addEventListener("click", rollAndDisplay);



function rollDice(num) {
    let dice = Array(num);
    for (let i = 0; i < num; i++) {
        dice[i] = Math.floor(Math.random()*6+1);
    }
    return dice;
}

function rollAndDisplay() {
    if (canReroll) {
        let dice = rollDice(rolledDice.length);
        rolledDice = dice;
        
        for (let i = 0; i < possibleSelectedDice.length; i++) {
            confirmedSelectedDice.push(possibleSelectedDice[i]);
        }
        possibleSelectedDice = [];

        currentPoints = proposedPoints;
        canReroll = false;
        updateDisplay();
    }
}


function scoreTally() {
    let points = 0;
    let allSelectedDice =  possibleSelectedDice.concat(confirmedSelectedDice);
    let numOfSides = {
        1: 0, 
        2: 0,
        3: 0,
        4: 0,
        5: 0,
        6: 0,
    }
    for (let i = 0; i < allSelectedDice.length; i++) {
        numOfSides[allSelectedDice[i]]++;
        if (allSelectedDice[i] == 1) {
            points += 100;
        }
        if (allSelectedDice[i] == 5) {
            points += 50;
        }
    }

    for (let i = 1; i <= 6; i++) {
        if (numOfSides[i] >= 3) {
            points += i*100*(numOfSides[i]-2);
        }
    }
    

    proposedPoints = points; 

    if (proposedPoints - currentPoints > 0) {
        canReroll = true;
    } else {
        canReroll = false;
    }
}

rollAndDisplay();