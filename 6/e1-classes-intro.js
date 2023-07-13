/* class Person {
    constructon() {

    }
}

const person1 = new Person();
const person2 = new Person(); */

// console.log(person1, person2);

//DEFINITION OF CLASSES WITH PARAMETERS

/* class Person {
    constructor(name,surename){
        this.name = name;
        this.surename = surename;
    }
}

const person1 = new Person("Can","Gökçe");
const person2 = new Person("John","Doe");

console.log(person1, person2); */


class Person {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;

    }

    logFirstName() {
        console.log("First name:", this.name);
    }

    logLastName() {
        console.log("Last name:", this.surname);
    }

    logFulltName() {
        console.log("Full name:", this.name, this.surename);
    }

}

const person1 = new Person("Can","Gökçeaslan");

const person2 = new Person("John", "Doe");

person1.logFirstName();
person1.logLasttName();
person1.logFullName();

person2.logFirstName();
person2.logLasttName();
person2.logFullName();