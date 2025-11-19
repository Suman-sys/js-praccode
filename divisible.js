// Given a number n, print whether it’s divisible by both 3 and 5, only one of them, or neither.

let n = 30;

console.log(n%3===0 && n%5===0 ? 'Both' : 
    n%3===0 ? "Divisible by 3" : 
    n%5===0 ? "Divisible by 5": 
    "Neither");