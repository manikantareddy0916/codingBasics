//Pure Functions
//1.Deterministic: Given the same input, a pure function always returns the same output.
//2.No Side Effects: A pure function does not modify any state or interact with the outside world (e.g., no changing global variables, no I/O operations like reading/writing files, etc.).
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Output: 5
console.log(add(2, 3)); // Output: 5 (always the same output for the same input)

//Impure Functions
//1.Non-Deterministic: The function can return different outputs for the same input.
//2.Side Effects: The function interacts with or modifies some state or performs actions that affect the outside world.
let counter = 0;

function incrementCounter() {
    counter += 1;
    return counter;
}

console.log(incrementCounter()); // Output: 1
console.log(incrementCounter()); // Output: 2 (different output for the same function call)
