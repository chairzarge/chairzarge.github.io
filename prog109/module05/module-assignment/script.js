//  Initialize table variable that will be applied on the table. Continue to
//  prompt for a value until the user presses cancel or enters a value between 0
//  and 10 (inclusive).
let table;
do {
    table = prompt("Provide a value from 0 to 10");
} while (Number(table) === NaN || table < 0 || table > 10)        // Unit of table



// Set initial value of message and counting variable
var i = 1;                
var msg = "<h2>Multiplication Table</h2>";              


//  Check to see of the user has either pressed cancel and if not, do
//  multiplication and add it to the message.
if (table === null) {
    msg += "Don't hit cancel you silly!";
} else {
    // Do multiplication
    while (i < 11) {
        msg += i + ' x ' + table + ' = ' + (i * table) + '<br />';
        i++;
    }

}



// Write the message into the page
var el = document.getElementById('blackboard');
el.innerHTML = msg;