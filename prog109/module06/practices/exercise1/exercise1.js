//Previous implementation of user input.
/*
var table = Number(prompt("Enter a number from 1-10"));             // Unit of table
var operator = prompt("Enter addition or multiplication"); // Type of calculation
*/


function displayTable() {
    var number = Number(document.querySelector("input[name='number']").value);
    var operator = document.querySelector("input[name='operatorType']:checked").value;
    generateTable(number,operator);
}





function generateTable(base, operator) {
    var i = 1;                 // Set counter to 1
    var msg = '';              // Message

    if (operator === 'addition') {
        // Do addition
        while (i < 11) {
            msg += i + ' + ' + base + ' = ' + (i + base) + '<br />';
            i++;
        }
    } else {
        // Do multiplication
        while (i < 11) {
            msg += i + ' x ' + base + ' = ' + (i * base) + '<br />';
            i++;
        }
    }

    // Write the message into the page
    var el = document.getElementById('blackboard');
    el.innerHTML = msg;
}