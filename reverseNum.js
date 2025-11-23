// Reverse a number using a while loop (e.g. 456 → 654).

let n = 456;
let rev = 0;

while(n>0){
    let ld = n%10;
    rev = rev * 10 + ld;
    n = Math.floor(n/10);
}

console.log("Reverse number is", rev);