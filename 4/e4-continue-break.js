for (let i = 0; i < 10; i++) {
    if(i === 5) {
        continue;
    }
    
    if(i === 8) {
        break;
    }
    //console.log(i)
}

let counter = 0;

while (counter < 10 ) {
    counter++;
    if(counter === 5) {
        continue;
    }

    console.log(counter);
    if (counter === 8) {
        break;
    }
}

let c = 0;
do{
    c++;
    if(c ) {
        continue;
    }
    console.log(c);

    if(c === 8) {
        break;
    }
} while (c < 10)