//BigONotation

//how do we know this is the best function to be for our problem solving

//Data Structure And Algorithms #2 Big O Notation And Performance Optimization

//1
function sumAll(n) {
    let total = 0;
    for (let index = 0; index <= n; index++) {
        total += index;
    }
    return total
}

function sumAllTwo(n) {
    return n * (n + 1) / 2
}
//execute this on window environment
const time1 = performance.now();
console.log(sumAllTwo(10))
const time2 = performance.now();
console.log(`time difference ${(time2 - time1)}`)