

let phoneNumberInputElement = document.getElementById("phoneInput");

phoneNumberInputElement.addEventListener("input", phoneNumberEdit);


function phoneNumberEdit(event) {
    // a bit buggy, I could probably make it better by only allowing number input
    // changing the logic to remove all the dashes, and then put them back in where
    // they belong, that way inserting isn't broken

    let num = document.getElementById("phoneInput").value;

    if (num.length > 3 && num.slice(3,4) != "-") {
        num = num.slice(0,3) + "-" + num.slice(3,num.length);
    }

    if (num.length > 7 && num.slice(7,8) != "-") {
        num = num.slice(0,7) + "-" + num.slice(7,num.length);
    }

    if (num.length > 12) {
        num = num.slice(0,12);
    }
    document.getElementById("phoneInput").value = num;
}


function validateForm() {
    let errorMessage = "";

    let firstName = document.getElementById("firstNameInput").value;
    let lastName = document.getElementById("lastNameInput").value;
    let email = document.getElementById("emailInput").value;
    let phone = document.getElementById("phoneInput").value;
    let username = document.getElementById("usernameInput").value;
    let password = document.getElementById("passwordInput").value;
    let address = document.getElementById("addressInput").value;
    let city = document.getElementById("cityInput").value;
    let state = document.getElementById("stateInput").value;
    let country = document.getElementById("countryInput").value;
    console.log(`Country: ${country} | State: ${state}`);
    let zipcode = document.getElementById("zipcodeInput").value;
    let comments = document.getElementById("commentInput").value;
    
    errorMessage += validateFirstName(firstName);
    errorMessage += validateLastName(lastName);
    errorMessage += validateEmail(email);
    errorMessage += validatePhone(phone);
    errorMessage += validateUsername(username);
    errorMessage += validatePassword(password);
    errorMessage += validateAddress(address);
    errorMessage += validateCity(city);
    errorMessage += validateState(state);
    errorMessage += validateCountry(country);
    errorMessage += validateZipcode(zipcode, country);
    errorMessage += validateComments(comments);
    

    if (errorMessage !== "") {
        document.getElementById("errorMessages").innerHTML = errorMessage;
        return false;
    }

    return true;
}


function validateFirstName(str) {
    let errors = [];

    if (str === null || str === "") {
        errors.push("First Name is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    let pattern = /^[A-Za-z]+$/;
    if (!pattern.test(str)) {
        errors.push("First Name can only contain alphabetical characters")
    }

    if (str.length > 20) {
        errors.push("First name must not exceed 20 characters");
    }
    
    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }

    return "";
}

function validateLastName(str) {
    let errors = [];

    if (str === null || str === "") {
        errors.push("Last Name is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    let pattern = /^[A-Za-z]+$/;
    if (!pattern.test(str)) {
        errors.push("Last Name can only contain alphabetical characters")
    }

    if (str.length > 50) {
        errors.push("Last Name must not exceed 20 characters");
    }


    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validateEmail(str) {
    let errors = [];

    if (str === null || str === "") {
        errors.push("Email is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    let pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!pattern.test(str)) {
        errors.push("Invalid Email");
    }

    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validatePhone(str) {
    let errors = [];

    if (str == null || str == "") {
        errors.push("Phone is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    while (str.includes("-")) {
        str = str.slice(0,str.indexOf("-")) + str.slice(str.indexOf("-")+1);
    }

    console.log(str);

    let num = Number(str);

    if (isNaN(num)) {
        errors.push("Invalid Phone Number");
    }

    if (num.toString().length > 15) {
        errors.push("Phone Number must not exceed 15 characters");
    }


    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validateUsername(str) {
    let errors = [];

    if (str === null || str === "") {
        errors.push("Username is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    if (str.length > 12) {
        errors.push("Username must not exceed 12 characters");
    }

    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validatePassword(str) {
    let errors = [];

    if (str === null || str === "") {
        errors.push("Password is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    if (str.length > 7) {
        errors.push("Password must not exceed 7 characters (sounds like a completely silly restriction and security risk)")
    }

    let pattern = /[A-Z]/;
    if (!pattern.test(str)) {
        errors.push("Password must contain 1 uppercase character");
    }

    pattern = /[a-z]/;
    if (!pattern.test(str)) {
        errors.push("Password must contain 1 lowercase character");
    }

    pattern = /[0-9]/;
    if (!pattern.test(str)) {
        errors.push("Password much contain 1 number");
    }

    pattern = /[^a-zA-Z0-9]/;
    if (!pattern.test(str)) {
        errors.push("Password must contain 1 special character");
    }

    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validateAddress(str) {
    let errors = [];

    if (str === null || str === "") {
        errors.push("Address is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validateCity(str) {
    let errors = [];

    if (str === null || str === "") {
        errors.push("City is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validateState(str) {
    let errors = [];

    if (str === null || str === "" || str === "Select State") {
        errors.push("State is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validateCountry(str) {
    let errors = [];

    if (str === null || str === "" || str === "Select Country") {
        errors.push("Country is a required field");
        return errors.join("<br>") + "<br><br>";
    }

    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validateZipcode(zip, country) {
    let errors = [];

    if ((zip === null || zip === "") && country == "United States") {
        errors.push("Zipcode is a required field for United States");
        return errors.join("<br>") + "<br><br>";
    }

    if (zip.length > 5) {
        errors.push("Zipcode must not exceed 5 characters");
    }

    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

function validateComments(str) {
    let errors = [];

    

    if (errors.length > 0) {
        return errors.join("<br>") + "<br><br>";
    }
    return "";
}

