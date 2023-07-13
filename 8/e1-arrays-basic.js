let people1 = ["Esma", "John", "Mary"];

//console.log(people1);

let people2 = [];

people2[0] = "Esma";
people2[1] = "John";
people2[2] = "Mary";

//console.log(people2)

const people3 = new Array("Esma", "John", "Mary");

//conosle.log(people3);

const people4 =["Esma", "John", "Mary"];

people4[0] = "John";

//console.log(people4);

const people5 = ["Esma", "John", "Mary", "Joe"];

const length1 = people5.length;

console.log("First Element:", people5[0])
console.log("Last Element:", people5[people5.length - 1]);

for (let i = 0; i < length1; i = i + 2) {
    console.log(people5[i])
}