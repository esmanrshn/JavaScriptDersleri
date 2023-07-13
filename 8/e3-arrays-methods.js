//concat

const arr1 = ["Cecilie", "Lone"];

const arr2 = ["Emilie", "Tobias", "Linus"];

const children = arr2.concat(arr1);

console.log("concat.", children)

//enteries
const fruits = ["Banana", "Orange", "Apple", "Mango"];

const f = fruits.entries();

console.log("Entries:", ...f);

// every

const ages = [32, 33, 16, 40];

function checkAge(age, index) {
    return age > 18;
} 

const bool = ages.every((age, index) => {
    return age > 18;
});

console.log("Every: Age Of array adult:", bool)


//fill

fruits.fiil("kiwi", 1, 2);

console.log(fruits)

//filter

const result = ages.filter((age, index) => {
    return age < 18;
});

console.log(result);

//find

const resultFind = ages.find((age, index) => {
    return age < 18;
});

console.log(resultFind);

//findIndex 

const resultFindIndex = ages.findIndex((age, index) =>{
    return age < 18;
});

console.log(resultFindIndex);

//forEach

fruits.forEach((fruit, index) => {
    console.log("Index:", index, "Fruit:", fruit);
})

//from

const fromArr = Array.from("ABCDEFG");

console.log(fromArr);

//includes

const bool1 = fruits.includes("Apple");

console.log("Is Apple Found:", bool1);

//indexOf 

const index = fruits.indexOf("Apple");

console.log("Apple Found Index:", index);


//isArray

const isArray = Array.isArray(fruits);
console.log("Is fruits array?", isArray)

//join
let text1 = fruits.join();

console.log("Join slash seperator:", text1);

let text2 = fruits.join("/");

console.log("Join slash seperator:", text2);

//keys
const key = fruits.keys();

console.log("Keys:", key);


//lastIndexOf

let index1 = fruits.lastIndexOf("Apple");

console.log("Index of Apple:", index1)

//map

const numbers = [65, 44, 12, 4];

const mapFn =(item, index) => {
    return item * 10;
}

const newArr = numbers.map(mapFn);

console.log(newArr);

//pop 

fruits.pop();

console.log("Pop:", fruits);

//push

fruits.push("Mango");

console.log("Push:", fruits)

//reduce

const numbers1 = [15.5,2.3,1.1,4.7];

const reduceFn = (total,num)=>{
    console.log(num);
    console.log(total);

    return total + Math.round(num);
}

const initalValue1 = 0;

const total1 = numbers2.reduce(reduceRightFn,initalValue1);

console.log("Total", totol1);

//reserve

fruits.reverse();

console.log("Reversed Fruits:", fruits)

//const removed = fruits.shift();
//console.log("Removed:", removed);
console.log("Fruits:", fruits)

//Slice

const fruitsSlince = fruits.slice(1, 3)

console.log("Slice:", fruitsSlince)

//some
const checkSome18 = (age, indeex) => {
    return age > 18;
}

const bool12 = ages.some(checkSome18);

console.log("Check if some 18:", bool12)


//sort

const points = [40,100,1,5,25,10];

const sortAsc = function (a, b) { return a - b };
const sortDesc = function (a, b) {return b - a };

const ascArr = points.sort(sortAsc);

console.log("Ascending Arr:", ascArr);

const desArr = points.sort(sortDesc);

console.log("Descending Arr:", descArr);


const normalArr = points.sort();

console.log("Normal Sort:", normalArr);

//splince 

console.log(fruits);

fruits.splince(2, 2, "Lemon", "Kiwi");

fruits.slice(1, 1);
console.log(fruits)

//to String

console.log( fruits.toStrin());

//unshift

/*const length = fruits.unshift("Lemon", "Pineapple");
console.log(fruits)
console.log(length); */

valueOf

const myArray = fruits.valueOf();

console.log(myArray)