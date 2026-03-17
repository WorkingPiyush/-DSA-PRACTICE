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
{
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
}

// write a func that returns the largest number in array.
// let arr1 = [16, 87, 6, 54, -90, 82, 54];
// let arr2 = [1, 1, 1];
// let arr3 = [0, 0, 0];
function largestNumber(arr) {
    let largestNum = - Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largestNum) {
            largestNum = arr[i]
        }
    }
    return largestNum;
}
// console.log(largestNumber(arr1)); -> 87
// console.log(largestNumber(arr2)); -> 1
// console.log(largestNumber(arr3)); -> 0

// write a func that returns the smallest number in array.
// let arr1 = [16, 87, 6, 54, -90, 82, 54];
// let arr2 = [1, 1, 1];
// let arr3 = [0, 0, 0];
function smallestNumber(arr) {
    let smallestNum = Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < smallestNum) {
            smallestNum = arr[i]
        }
    }
    return smallestNum;
}
// console.log(smallestNumber(arr1)); -> -90
// console.log(smallestNumber(arr2)); -> 1
// console.log(smallestNumber(arr3)); -> 0