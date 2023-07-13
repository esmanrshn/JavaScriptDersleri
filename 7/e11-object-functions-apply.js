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
/*
const fullNama0 = person1.fullName()

console.log(fullName);

const fullName1 = person1.fullName.call(user1);

console.log(fullName1);

const fullName2 = person1.fullName.call(user2);

console.log(fullName2); */


const person2 = {
    fullName: function (city, country) {
        return this.firstName + " " + this.lastName + " " + city + " " + country
    }
}

const user3 = {
    firstName: "Esma" ,
    lastName: "Şahin"
}

const fullNameWithPlace = person2.fullName.apply(user3,["Ankara","Türkiye"])

console.log(fullNameWithPlace)