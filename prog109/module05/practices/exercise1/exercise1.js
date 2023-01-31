var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
    greeting = 'Good evening!';
} else if (hourNow > 12) {
    greeting = 'Good afternoon!';
} else if (hourNow > 0) {
    greeting = 'Good morning!';
} else {
    greeting = 'Welcome!';
}


alert("Welcome user!");
let firstName = prompt("First Name: ");
let lastName = prompt("Last Name: ");


document.write(`<h3>${greeting} ${firstName} ${lastName}</h3>`);


