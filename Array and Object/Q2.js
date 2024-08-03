
function reverseArray(array) {
    let reversedArray = [];
    for (let i = array.length - 1; i >= 0; i--) {
        reversedArray.push(array[i]);
    }
    return reversedArray;
}

function reverseArrayInPlace(array) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        // Swap elements
        let temp = array[start];
        array[start] = array[end];
        array[end] = temp;

        start++;
        end--;
    }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"]
console.log(myArray);
// → ["A", "B", "C"]  // Original array is unchanged
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]  // Original array is modified
