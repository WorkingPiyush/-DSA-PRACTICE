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
// star pattern NxN
{
    function starPatternNxN(n) {
        for (let i = 0; i < n; i++) {
            // this will be responsible for the row 
            let str = ''
            for (let j = 0; j < n; j++) {
                // this will be responsible for the column 
                str = str + " *"
            }
            console.log(str)
        }
    }
    // starPatternNxN(4)
    //  * * * *
    //  * * * *
    //  * * * *
    //  * * * *
    // starPatternNxN(4)
    //  * * * * * * *
    //  * * * * * * *
    //  * * * * * * *
    //  * * * * * * *
    //  * * * * * * *
    //  * * * * * * *
    //  * * * * * * *
}
// star pattern Tree
{
    function starPatternTree(n) {
        for (let i = 0; i < n; i++) {
            // this will be responsible for the row 
            let str = ''
            for (let j = 0; j <= i; j++) {
                // this will be responsible for the column 
                str = str + " *"
            }
            console.log(str)
        }
    }
    // starPatternTree(4)
    //  *
    //  * *
    //  * * *
    //  * * * *
    // starPatternTree(7)
    //  *
    //  * *
    //  * * *
    //  * * * *
    //  * * * * *
    //  * * * * * *
    //  * * * * * * *
}
// star pattern Tree Num
{
    function starPatternTreeNum(n) {
        for (let i = 0; i < n; i++) {
            // this will be responsible for the row 
            let str = ''
            for (let j = 0; j <= i; j++) {
                // this will be responsible for the column 
                str = str + (j + 1)
            }
            console.log(str)
        }
    }
    // starPatternTreeNum(5)
    // 1
    // 12
    // 123
    // 1234
    // 12345
}
// star pattern Num Tree
{
    function starPatternNumber(n) {
        for (let i = 0; i < n; i++) {
            // this will be responsible for the row 
            let str = ''
            for (let j = 0; j <= i; j++) {
                // this will be responsible for the column 
                str = str + (i + 1)
            }
            console.log(str)
        }
    }
    // starPatternNumber(5)
    // 1
    // 22
    // 333
    // 4444
    // 55555
}
// star pattern Number Reverse Tree
{
    function starPatterNumRev(n) {
        for (let i = 0; i < n; i++) {
            let space = '';
            for (let j = 0; j < n - i; j++) {
                space = space + (j + 1)
            }
            console.log(space)
        }
    }
    // starPatterNumRev(5)
    // 12345
    // 1234
    // 123
    // 12
    // 1
    // starPatterNumRev(10)
    // 12345678910
    // 123456789
    // 12345678
    // 1234567
    // 123456
    // 12345
    // 1234
    // 123
    // 12
    // 1
}
// star pattern Str Reverse Tree
{
    function starPatterStrRev(n) {
        for (let i = 0; i < n; i++) {
            let str = '';
            for (let j = 0; j < n - i; j++) {
                str = str + ' *'
            }
            console.log(str)
        }
    }
    // starPatterStrRev(5)
    //  * * * * *
    //  * * * *
    //  * * *
    //  * *
    //  *
    // starPatterStrRev(10)
    //  * * * * * * * * * *
    //  * * * * * * * * *
    //  * * * * * * * *
    //  * * * * * * *
    //  * * * * * *
    //  * * * * *
    //  * * * *
    //  * * *
    //  * *
    //  *
}
// star pattern one sidded pyramid
{
    function starPattern2(n) {
        for (let i = 0; i < n; i++) {
            let str = '';
            for (let j = 0; j < n - (i + 1); j++) {
                str = str + ' '
            }
            for (let k = 0; k < i + 1; k++) {
                str = str + "*"
            }
            console.log(str)
        }
    }
    // starPattern2(5)
    //     *
    //    **
    //   ***
    //  ****
    // *****
    // starPattern2(10)
    //          *
    //         **
    //        ***
    //       ****
    //      *****
    //     ******
    //    *******
    //   ********
    //  *********
    // **********
}
// pattern switch 1-0
{

    function oneZeroPattern(n) {
        for (let i = 0; i < n; i++) {
            let str = "";
            let toggle = 1;
            for (let j = 0; j <= i; j++) {
                str = str + toggle;
                if (toggle == 1) { toggle = 0 }
                else { toggle = 1 }
            }
            console.log(str)
        }
    }
    // oneZeroPattern(5)
    // 1
    // 10
    // 101
    // 1010
    // 10101
    // oneZeroPattern(10)
    // 1
    // 10
    // 101
    // 1010
    // 10101
    // 101010
    // 1010101
    // 10101010
    // 101010101
    // 1010101010
}
// remove duplicates
{
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    // this will return no of unique elements in the nums arr;
    function removeDuplicates(nums) {
        let x = 0;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] > nums[x]) {
                x = x + 1;
                nums[x] = nums[i];
            }
        }
        return x + 1;
    }
    // console.log(removeDuplicates(nums)) // 5
}
// remove elements and return non-target nums
{
    let nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    function removeElements(nums) {
        let x = 0;
        let target = 1;
        for (let i = 0; i < nums.length; i++) {
            if (nums[i] !== target) {
                // this condition only execute if the i != target for shifting the element it is nessary;
                nums[x] = nums[i];
                x = x + 1;
            }
        }
        // this only returns the count of non-target nums in the array;
        return x;
    }
    // console.log(removeElements(nums)); // 7
}
// reverse string in an array
{
    function reverseStringArr(arr) {
        // length of input
        let n = arr.length;
        // halfing the length of arr with Math.floor so we get non-decimal num.
        let halfN = Math.floor(n / 2);
        for (let i = 0; i < halfN; i++) {
            // storing the intial arr num in a temp variable so i can transfer the value.
            // we are swapping arr[i] with arr[n-1-i]
            let temp = arr[i]
            arr[i] = arr[n - 1 - i];
            arr[n - 1 - i] = temp;
        }
        // returning the reversed inplace arr. 
        return arr;
    }

    // console.log(reverseStringArr(['P', 'i', 'y', 'u', 's', 'h', ' ', 'K', 'u', 'm', 'a', 'r']))
    // ['r', 'a', 'm', 'u', 'K', ' ', 'h', 's', 'u', 'y', 'i', 'P']
    // console.log(reverseStringArr(['r', 'a', 'j', 'a', 'j', 'j', 'a']))
    // ['a', 'j', 'j', 'a', 'j', 'a', 'r']
}