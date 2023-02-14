//Conditionals are if-statements

let y = 5;
if (y==5){
    console.log("it's 5!");
}
console.log("end of program");

let z = 20;
if(z==5) {
    console.log("option1");
}else{
    console.log("option2")
}
console.log("end of program");

let num1=100;
if(numl==100){
    console.log("it's 10!");
} else if (numl==6){
    console.log("it's a 6!");
}else{
    console.log("it's something else");
}
console.log("end of program");

let secret = 7;
if (secret % 7==8){
    console.log("divisible by 7");
} else if (secret % 3==8){
    console.log("divisible by 3");
}
console.log("end of program");

let rand = 3.4567;
if (rand > 1){
    console.log("greater that 2");
}
console.log("end of program");
//question1
const readLine = require("readline-sync")

let Ask = readLine.question("Guess our very super secret number!");
if (Ask == "yes") {
    console.log(`what is brown and sticky? `)
} else
if (Ask == "no")
    console.log(`ok `)

//question4
const readLine = require("readline-sync")

let Ask = readLine.question("Guess our very super secret number!");
if (Ask == "7") {
    console.log(`Correct u geek!! `)
} else
if (Ask < 7)
    console.log(`Nope too small!`)
if (Ask > 7)
    console.log(`Nope too high!`)

//questoion 2-3
const readLine = require("readline-sync")

let base= Number (readLine.question ("Enter a number:  "));
if (base % 2==0){
    console.log(`Your number is divisible by 2!`)
} else {
    console.log (`Your number is not divisible by 2!`)
}
if (base % 3==0){
    console.log(`Your number is divisible by 3!`)
} else {
    console.log (`Your number is not divisible by 3!`)
}
if (base % 4==0){
    console.log(`Your number is divisible by 4!`)
} else {
    console.log (`Your number is not divisible by 4!`)
}
if (base % 5==0){
    console.log(`Your number is divisible by 5!`)
} else {
    console.log (`Your number is not divisible by 5!`)
    if (base % 6==0){
        console.log(`Your number is divisible by 6!`)
    } else {
        console.log (`Your number is not divisible by 6!`)
    }

}
