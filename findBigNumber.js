/*
	Simple program to delete biggest number in an Array
*/
/* Function to find big number and delete it from array */
function findBigNumber(numbers) {
    numbers.sort(function(a, b) {
        return a - b;
    });
    numbers.pop();
    console.log("Array after deleting big number ");
    console.log(numbers);
}

/* Function to generate random numbers in an array */

let arr = [];
while (arr.length < 10) {
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    if (arr.indexOf(randomNumber) > -1)
        continue;
    arr[arr.length] = randomNumber;
}

console.log("Random generated array ");
console.log(arr);

findBigNumber(arr);