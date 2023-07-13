function multiply(p1,p2) {
    console.log("Multiplication started")
    const multiplied = p1 * p2;
return multiplied;
}

console.log("Multiplication not started");

let result = multiply(10,12);

console.log("Multiplication of 10 and 12:", result);


console.log("----------------------------")

function fullNameGenerator(FirstName,lastName){
    return firstName + " " + lastName;
}

let fullName = fullNameGenerator("Esma","Sahin")

let text = "Hi,I am " + fullNameGenerator("Esma","Sahin");

console.log(text);
