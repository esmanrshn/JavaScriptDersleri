// IndeOf

let str1 = "Search in the string";

let index1= str1.indexOf("the")

let index2=str1.indexOf("the",12);

 /* console.log("Full Text:", str1);
 console.log("The indeex:", index1);
 console.log("The index after 12 char:", index2); */

 //Last Of Index

 let str2= "search in the string";

 let index3=str1.lastIndexOf("in");

 let index4=str1.lastIndexOf("the",12)

/* console.log("Full Text:", str2);
 console.log("The index:", index3);
 console.log("The index after 12 char:", index4);  */


 //Search

 let str3 = "Search in the string";

 let found1 = str3.search("in");

 /* console.log("Full Text:", str3);
 console.log("Found position:", found1); */

 // Match 

 let str4 = "Test string for matching Regex format";
 let matched1=str4.match(/t/ig)

 //console.log("Matched arr:", matched1);

 //includes

let str5 = "Hello World, Welcome to universe";
let includes1 = str5.includes("the");

/* console.log("Full Text:", str5);
 console.log("is includes:", includes1); */

 //Startswith

 let str6= "Hi StartUp Academy";
 let Startswith1=str6.startsWith("Hi");
 let startsWith2=str6.startsWith("art", 6);

/* console.log("Full Text:", str6);
 console.log("is strated with:", startsWith1);
 console.log("is started with after 15 char skipped:", starsWith2);  */

 //EndsWith

 let str7="Hi,StartUp Academy";
 let endsWith1=str7.endsWith("Academy");
 let endsWith2=str7.endsWith("Academy",15);

 /* console.log("Full Text:", str7);
 console.log("is ended with:", endsWith1);
 console.log("is ended with after 15 char skipped:", endsWith2);  */
