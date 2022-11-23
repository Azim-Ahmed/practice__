//BigONotation

//how do we know this is the best function to be for our problem solving

//Data Structure And Algorithms #2 Big O Notation And Performance Optimization

//1
function sumAll(n) {
    //there are 5 assignments in this function
    // let total = 0; first one where our time complexity is (5n + 2) where BigO(n)


    let total = 0;
    for (let index = 0; index <= n; index++) {
        total += index;
    }
    return total
}

function sumAllTwo(n) {   //the time complexity is Big-O(1), this is better

    // there are three operator in the function 1. multiplication , 2. adding 3. Divide
    return n * (n + 1) / 2
}
//execute this on window environment
// const time1 = performance.now();
console.log(sumAllTwo(10))
// const time2 = performance.now();
// console.log(`time difference ${(time2 - time1)}`)


function multipleArray(n) {
    for (let i = 0; i <= n; i++) {   // this is depending on n time so this one n complexity
        //n * n = n2 complexity
        for (let j = 0; j <= n; j++) {   // this is depending on n time so this one n complexity
            console.log(i, j)
        }
        // for (let j = 0; j <= 3; j++) {   // if the next for loop depending only the number this will be n complexity
        //     console.log(i, j)
        // }
    }
}
multipleArray(3)

//in the time complexity constant of n is not matters like (n+10) where bigO(n)
//in the time complexity constant of n is not matters like (100n+10) where bigO(n)
//in the time complexity constant of n is not matters like (n2 + 100n+10) where bigO(n2)