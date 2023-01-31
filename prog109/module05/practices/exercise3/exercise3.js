do {
    var table = prompt("Provide a value from 0 to 10");
} while (Number(table) === NaN || table < 0 || table > 10)        // Unit of table


do {
    var operator = prompt("Provide an operator (either '+' or '*')");
} while (operator !== '+' && operator !== '*') // Type of calculation
var i = 1;                 // Set counter to 1
var msg = '';              // Message


if (table === null) {
    msg += "Don't hit cancel you silly!";
} else {
    if (operator === '+') {
        // Do addition
        while (i < 11) {
          msg += i + ' + ' + table + ' = ' + (i + table) + '<br />';
          i++;
        }
      } else {
        // Do multiplication
        while (i < 11) {
          msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
          i++;
        }
      }
}



// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;