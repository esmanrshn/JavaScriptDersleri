let person = { 
    firstName: "John",
    lastName: "Doe" ,
    age: 50,
    nullable: null, 
    undefinable:undefined,
    bigInt: BigInt(26578576767867789),
    fullName: function () {
        return this.firstname + " " + this.lastName
    },
    ageLogger: () => {
        console.log("AGE OF JOHN DOE:", 50)
    }
}

const fullName = personfullName();

console.log("Full name:", fullName);

person.ageLogger();
