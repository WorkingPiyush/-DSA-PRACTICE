// console.log("Hello Dsa")

// writing a func that searches for an element in an array and returns the index and if element is not found then it returns -1.
{
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
}

// write a func that returns the number of negative numbers in an array
let arr1 = [1, -6, 59, -78, 90, -54, 44, -56, -53, 23];
let arr2 = [1, -6, 59, -78, 0, 54, 44, 56, 8, 23];
let arr3 = [1, -6, -9, -7, 90, -54, -44, 56, -53, 23];

function countNegativeNums(arr) {
    let count = 0; // Negaive counter
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            count++; // inc when the -ve num found
        }
    }
    return count; // return the result
}
// console.log(countNegativeNums(arr1)); -> 5
// console.log(countNegativeNums(arr2)); -> 2
// console.log(countNegativeNums(arr3)); -> 6