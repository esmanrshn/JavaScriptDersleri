//THROW
//throw "500";
//throw 500;
/*throw{
message:"Somethings is wrong!",
code:"ERR_SOMETHING_IS_WRONG",
status:400
} */
//TRY CATCH
 /*try {
const x=10;
const y=20;
const z=0;
z=x+y;
throw {
    message:"Something is wrong!",
    code:"ERR_SOMETHING_IS_WRONG",
    status:400
}   
} catch (err) {
    console.warn(err);
} */

//TRY CATCH FINALY
console.log("İşlem başladı");
try{
    const x = 10; 
    const y = 20;
    const z = x+y;
    //z=x+y;

    //console.log(z);
    throw{
        message:"Something is wrong!",
        code:"ERR_SOMETHING_IS_WRONG",
        status:400
    }
} catch (err){
    console.warn(err);
}finally {
    console.log("Kodumuz çalıştı ve sonuçlar üstte listelendi")
}

console.log("İşlem tamamlandı");
