


console.log(document.title);

console.log(document.lastModified);

console.log(document.URL);


// document.domain is deprecated
/*
console.log(document.domain);
*/

let footerInfo = `${document.title} - ${document.lastModified} - ${document.URL}`;



document.querySelector("footer p").innerHTML = footerInfo;