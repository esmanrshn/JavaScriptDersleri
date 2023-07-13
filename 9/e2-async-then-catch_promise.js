const ms = 3000;
const callback = () => {
    console.log("Waited for", ms, "milliseconds")
}

//etTimeout(callback, ms)

const promise = new promise((resolve, reject) => {
try {
    throw "HATA ALINDI";
    setTimeout(function (){
        resolve(true);
    }, ms)
} catch (error) {
    reject(error)
}
}) 



promis.then((value) => {
    console.log("Returned resolve:", value)
}).catch((error) =>{
    console.log(error);
})

console.log(promise);
