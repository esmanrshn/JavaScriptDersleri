const callbackFn = (sum) => {
    console.log("Calculated Sum:", sum);
    return sum;
}

const sumFn = (x, y, callbackF) => {
    const sum = x + y;
    return callback(sum)
}

const sunValue = sumFn(5, 2, callbackFn);
console.log("Returned Value:", sumValue);