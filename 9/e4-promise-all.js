const promises = [1000, 2000, 3000].map ((ms, index) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(function () {
                console.log(ms, ".milisaniye tamamlandı")
                resolve(ms)   
            }, ms);
        } catch ( error){
            reject(error)
        }
    })
})

promise.all(promise).then((values) => {
    console.log(values);
}).catch((error) => {

})

console.log(promises)