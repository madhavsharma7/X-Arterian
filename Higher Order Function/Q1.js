let arrays = [[1, 2, 3], [4, 5], [6]];

let flattenedArray = arrays.reduce((acc, currentArray) => acc.concat(currentArray));

console.log(flattenedArray); 
