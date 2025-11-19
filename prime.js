// Write code to check whether a number is prime or not.

let n = 7;
let count = 0;

for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    count++;
  }
}

if (count === 2) {
  console.log("Prime");
} else {
  console.log("Not Prime");
}