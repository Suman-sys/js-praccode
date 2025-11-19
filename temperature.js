// Take a temperature in Celsius and print a message:

        // a. < 10: “Too cold”

        // b. 10–30: “Normal”

        // c. >30: “Hot”


let temp = 25; 

if (temp < 10) {
  console.log("Too cold");
} else if (temp >= 10 && temp <= 30) {
  console.log("Normal");
} else {
  console.log("Hot");
}
