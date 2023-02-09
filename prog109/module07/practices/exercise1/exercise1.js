
/*
let person = {
    firstName: "Virtual",
    lastName: "Boy",
    weight: { magnitude: "158", units: "bytes" },
    birthday: new Date(2000,1,1),
}
*/


function Person(firstName, lastName, weight, height, birthday, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.weight = weight;
    this.height = height;
    this.birthday = birthday;
    this.gender = gender;

    this.BMI = function() {
        return (weight)/(height*height);
    };
}



let person1 = new Person("Matt","Henderson",70,1.75,new Date(2000,1,1),"male");


let people = [  person1, 
                new Person("Sarah","Gold",60,1.2,new Date(2001,1,5),"female"), 
                new Person("Ash","Septenary",60,1.75,new Date(2005,6,6),"non-binary")]

console.log(people);

people.forEach(person => console.log(person.BMI()))

