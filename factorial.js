// Print the factorial of a number n (e.g. 5 → 120).

let n = 5;
let fact = 1;
 
for(let i=1; i<=n; i++){
    fact = fact * i;
}

console.log("Factorial of 5 is", fact)