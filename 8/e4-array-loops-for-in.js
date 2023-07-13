const obj = {
    a:1,
    b:2,
    c:3,
    d:4,
    e:5,
}

for (let key in obj) {
    console.log("Key", key);
    console.log("Value:", obj[key]);
}

const arr = [
    "a",
    "b",
    "c",
    "d",
    "e"
]

for (let key in arr ) {
    const value = arr[key];
    console.log("Key:", key);
    console.log("Value:",);
}