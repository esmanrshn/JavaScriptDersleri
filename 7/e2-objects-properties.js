let person = { 
    firstName: "John",
    lastName: "Doe" ,
    age: 50,
    nullable: null, 
    undefinable:undefined,
    bigInt: BigInt(98756546545556589)
}

 //Object Properties

 const firstName = person.firstName;
 
 console.log(firstName);

 //list Natation

 const  lastName = person["lastName"];
 
 console.log(lastame);

 const key = "age";

 const age= person[key];

 console.log(age);

 console.log("Name:", person.firstName);
 console.log("surname:", person["lastName"]);
 console.log("Age:", person[key]);
 