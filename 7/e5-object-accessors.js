//GETTER
/* let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    get ageGetter(){
        return this.age;
    }
}

const age = person.age Getter;

console.log("Age:", age) */

//SETTER
let person = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    get ageGetter(){
        return this.age;
    },
    set ageSetter(age){

    }
}
person.ageSetter = 50;

console.log("Age:", person.ageGetter)