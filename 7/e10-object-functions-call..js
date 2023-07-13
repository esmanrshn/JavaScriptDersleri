const person1 = {
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
}

const user1 = {
    firstName: "John",
    lastName: "Doe"
}

const user2 = {
    firstName: "Esma",
    lastName: "Şahin"
}
 
//CALL

/* const fullName0 = person1.fullName()

console.log(fullName0);

const fullName1 = person1.fullName.call(user1);

console.log(fullName1);

const fullName2 = person1.fullName.call(user1);

console.log(fullName2); */

const person2 = {
    fullName: function (city, country) {
        return this.firsName + " " + this.lastName + ", " + city + "/" + country
    }
}

const user3 = {
    firstName: "Esma" ,
    lastName: "Şahin"
}

const fullNameWithPlace = person2.fullName.call(user3, "Ankara", "Turkey");

console.log(fullNameWithPlace);


