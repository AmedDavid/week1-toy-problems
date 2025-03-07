// Write a function that takes an array of numbers as input. It should output an array of those same numbers sorted from lowest to highest.

// sample input = [5,6,1,3,4,2]
// Expected output = [1,2,3,4,5,6]

function bubbleSort(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}


// console.log(bubbleSort([5, 3, 8, 4, 2])); // [2, 3, 4, 5, 8]
// console.log(bubbleSort([36, 19, 29, 12, 5, 9])); // [5, 9, 12, 19, 29, 36]
// console.log(bubbleSort([1, 2, 3, 4, 5])); // [1, 2, 3, 4, 5]

const myTest = [5, 6, 1, 3, 4, 2];
console.log("Original Array:", myTest);
console.log("Sorted Array:", bubbleSort(myTest));
// [1, 2, 3, 4, 5, 6]
// [5, 6, 1, 3, 4, 2]