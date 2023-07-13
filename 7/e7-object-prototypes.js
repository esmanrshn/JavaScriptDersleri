function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
}

person.prototype.nationality = "Türkiye";

person.prototype.fullName = function () {
    return this.firstName + " " + this.lastName;
}

const person = new Person("Can", "Gökçeaslan", 27);

console.log(person.firstName, person.lastName, person.age, person.nationality);
console.log(person.fullNama());