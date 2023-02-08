

document.querySelector("button").addEventListener("click", buttonFunction);



function buttonFunction() {

    let inputString = String(document.getElementById("stringInput").value);
    let output;
    let functionType = document.querySelector("input:checked");

    if (functionType.value == "uppercase") {
        output = inputString.toUpperCase();
    } else if (functionType.value == "lowercase") {
        output = inputString.toLowerCase();
    } else {
        output = inputString.length;
    }

    document.getElementById("output").innerHTML = output;
}

