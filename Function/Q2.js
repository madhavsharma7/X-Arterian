function iseven(n) {
    if (n === 0) {
        return true;  // Zero is even
    } else if (n === 1) {
        return false; // One is odd
    } else {
        return iseven(n - 2); // Recursively check for N - 2
    }
}


console.log(iseven(0));  
console.log(iseven(1)); 
console.log(iseven(4));  