let person = {
    firstName:"John",
    lastName: "Doe" ,
    age: 50,
    nullable: null, 
    undefinable:undefined,
    bigInt: BigInt(758475873475985498)
};

//Object.keys
const keysArr = Object.keys(person);

console.log(keysArr);

//Object.values

const valuesArr = Object.values(person);

console.log(valuesArr);
