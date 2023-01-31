



let weight = prompt("Weight (kg)");

let height = prompt("Height (meters)");

let bmi = (weight) / (height * height);

let bmiStatus, bmiStatusDisplay;

if (bmi < 18.5) {
    bmiStatus = "underweight";
    bmiStatusDisplay = "Underweight";
} else if (bmi < 25) {
    bmiStatus = "normal";
    bmiStatusDisplay = "Normal";
} else if (bmi < 30) {
    bmiStatus = "overweight";
    bmiStatusDisplay = "Overweight";
} else if (bmi < 35) {
    bmiStatus = "obese";
    bmiStatusDisplay = "Obese";
} else {
    bmiStatus = "extremelyObese";
    bmiStatusDisplay = "Extremely Obese";
}


document.write("<div id=\"main\" class=\"" + bmiStatus + "\"><h1>Your BMI is: </h1><var id=\"number\">" + bmi.toFixed(1) + "</var><br><var id=\"status\">" + bmiStatusDisplay + "</var></div>");




