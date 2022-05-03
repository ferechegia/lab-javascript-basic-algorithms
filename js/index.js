// Iteration 1: Names and Input
// 
let hacker1 = "Fernando"
console.log(`The driver's name is ${hacker1}`)

let hacker2 = "Alvaro"
console.log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.  
   if (hacker1.length > hacker2.length) {
  console.log(`The driver has the longest name, it has ${hacker1.length} characters`)
}
else if (hacker1.length > hacker2.length) {
  console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}
else {
  console.log(`Wow, you both have equally long names, ${hacker1.length} characters`)
}



// Iteration 3: Loops
// - Print all the characters of the driver's name, separated by a space and in capitals i.e. "J O H N"
// - Print all the characters of the navigator's name, in reverse order. i.e. "nhoJ"
/*
Depending on the lexicographic order of the strings, print:
- The driver's name goes first.
- Yo, the navigator goes first definitely.
- What?! You both have the same name?
*/

let driverName = ""
for(let i=0; i < hacker1.length; i+=1) {
    driverName += hacker1[i].toUpperCase() + " "
}
console.log(driverName.trim())


let navigatorsName = ""
for(let i = hacker2.length - 1; i >= 0; i-=1) {
  navigatorsName += hacker2[i];
}
console.log(navigatorsName);




if (hacker1 > hacker2) {
    console.log("The driver's name goes first")
    } else if (hacker1 < hacker2) {
         console.log("Yo, the navigator goes first definitely")
     } 
     else {
         console.log("What?! You both have the same name?")
     }


     