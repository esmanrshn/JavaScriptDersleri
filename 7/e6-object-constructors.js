function Person(first, last, age) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.fullName = function () {
        return this.firstName + "" + this.lastName;
    }
}

const person1 = new Person("Can", "Gökçeaslan", 27);
const person2 = new Person(".John", "Doe", 32);

console.log(person1.fullName(), person1.age)
console.log(person2.fullName(),person2.age)
