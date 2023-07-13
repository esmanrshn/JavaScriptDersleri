//CREATE MAP

const fruits1 = new Map ([
    ["apples", 500],
    ["bananas", 300],
    ["oranges", 200]

])

//console.log(fruits1);

//SET & OVERRİDE

fruits1.set("kiwi", 100);
fruits1.set("apples", 800);

//console.log(fruits);


//GET 

console.log("apples:", fruits1.get("apples"));
console.log("bananas:", fruits1.get("bananas"));
console.log("oranges:", fruits1.get("oranges"));
console.log("kiwi:", fruits1.get("kiwi")); 
 
//SIZE

//console.log(fruits1.size);

//HAS , DELETE ,CLEAR


console.log(fruits1.has("apples"))
fruits1.delete("apples");
fruits1.delete("kiwi");
console.log(fruits1);

fruits1.clear();

console.log(fruits1);
