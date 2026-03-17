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
{
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

}

// write a func that returns the smallest number in array.
{
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
}
// write a func that returns the largest and second largest number in array.
{
    let arr1 = [16, 87, 6, 87, 54, -90, 82, 54];

    function secondLargestNum(arr) {
        let largestNum = - Infinity;
        let secondlargestNum = - Infinity;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] > largestNum) {
                largestNum = arr[i];
            } if (arr[i] > secondlargestNum && arr[i] !== largestNum) {
                secondlargestNum = arr[i];
            }
        }
        return { largestNum, secondlargestNum };
    }
    let { largestNum, secondlargestNum } = secondLargestNum(arr1);
    // console.log('largestNum', largestNum); -> 87
    // console.log('secondlargestNum', secondlargestNum); -> 82
}

// count the no of digit in a number.
{
    function countDigit(n) {
        if (n === 0) return 1;
        let count = 0;
        n = Math.abs(n);
        while (n !== 0) {
            n = Math.floor(n / 10);
            ++count
        }
        return count;
    }

    // console.log(countDigit(7878))

}

// checking is the number is Palindrome or not.
{
    function isPalindrome(num) {
        if (num === 0) return false;
        let numCopy = num
        num = Math.abs(num)
        let reversedNum = 0;
        while (num > 0) {
            let rem = num % 10;
            reversedNum = (reversedNum * 10) + rem;
            num = Math.floor(num / 10);
        }
        return reversedNum === numCopy;
    }
    // console.log(isPalindrome(101));
}
// reverse the integer.
{
    function reverseInt(num) {
        if (num === 0) return false;
        let numCopy = num;
        num = Math.abs(num);
        let revInt = 0;
        while (num > 0) {
            let rem = num % 10;
            revInt = (revInt * 10) + rem;
            num = Math.floor(num / 10);
        }
        return (numCopy < 0) ? -revInt : revInt;
    }
    // console.log(reverseInt(102))
}