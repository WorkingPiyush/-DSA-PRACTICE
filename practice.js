// console.log("Hello Dsa")

// writing a func that searches for an element in an array and returns the index and if element is not found then it returns -1.

let arr = [1, 6, 88, 44, 654, 44, 56, 53, 23];

function findIndex(arr, elem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === elem) {
            return i;
        }
    }
    return -1;
}

// console.log(findIndex(arr, 654)); -> 4
// console.log(findIndex(arr, 44)); -> 3
// console.log(findIndex(arr, 53)); -> 7 