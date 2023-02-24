var logElement = document.getElementById('log');

function log(msg) {
    logElement.innerHTML += ('<p>' + msg + '</p>');
}

function capture() {
    log('capture: ' + this.firstChild.nodeValue.trim());
}

function bubble() {
    log('bubble: ' + this.firstChild.nodeValue.trim());
}

function clearOutput() {
    logElement.innerHTML = "";
}

var divs = document.getElementsByTagName('div');
for (var i = 1; i < 2; i++) {
    divs[i].addEventListener('click', capture, true);
    divs[i].addEventListener('click', bubble, false);
}
var clearButton = document.getElementById('clear');
clearButton.addEventListener('click', clearOutput);