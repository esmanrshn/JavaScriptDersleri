const names = ["Esma", "Deniz", "Ayşe"];

let text = "";

for (let x of names) {
    console.log(x);
    text+= x + " ";
}

console.log(text.trim());