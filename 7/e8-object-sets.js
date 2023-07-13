const letters1 = new Set(["a", "b", "c"]);

//console.log(letters1);


letters1.add("d");
letters1.add("e");
letters1.add("f");
letters1.add("d");

//console.log(letters1);

//Values
const valuesArr = letters1.values();

//console.log(valuesArr);

//Keys

const keysArr = letters1.keysArr();

//console.log(keysArr);

//Type & Instanceof

console.log(typeof letters1);
console.log(letters1 instanceof Set)