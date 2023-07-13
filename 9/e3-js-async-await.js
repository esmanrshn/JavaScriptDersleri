const promise = new promise((resolve,reject) =>{
    try {
        setTimeout(() => {
            resolve(true);
        }, 3000)
    } catch (error) {
        reject(error);
    }
})


const asyncFn = async () => {
    console.log("ABC");
    const value = await promise;
    console.log("XYZ");
    console.log(value);
}

asyncFn().then((result) => {

}).chatch((error) => {

});

console.log("UTF");

