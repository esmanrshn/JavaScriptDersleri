//DEFAULT FUNCTION 
/* function isTrue(param) {
    const bool = param === null || param === undefined || param === "";
    rreturn !bool;
}

console.log("null:", isTrue(null))
console.log("undefined:", isTrue(undefined))
console.log("Empty String:",isTrue(""))
console.log("Test:", isTrue("Test")) */


//INLINE FUNCTION

/* const isTrue = function (param){
    const bool = param === null || param === undefined || param === ""; 
    return !boll;
}

console.log("null:", isTrue(null))
console.log("undefined:", isTrue(undefined))
console.log("Empty String:",isTrue(""))
console.log("Test:", isTrue("Test")) */

// ARROW FUNCTION DEFINITION

/* const isTrue = (param) => {
    const bool = param === null || param === undefined || param === ""; 
    return !boll;
}

console.log("null:", isTrue(null))
console.log("undefined:", isTrue(undefined))
console.log("Empty String:",isTrue(""))
console.log("Test:", isTrue("Test")) */

//SELF-INVOKING FUNCTION

const bool =(function (param) {
    const bool = param === null || param === undefined || param === ""; 
    return !boll;
})("")

console.log("Empty String:", bool);
