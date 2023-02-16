const readLine = require('readline-sync');

//1
let num1= Number (readLine.question ("Enter Number:  "));
let num2= Number (readLine.question ("Enter 2nd number:  "));
console.log(`${num1} + ${num2} = ${num1 + num2}`);
//2
let num3= Number (readLine.question ("Enter Number:  "));
let num4= Number (readLine.question ("Enter 2nd number:  "));
console.log(`${num3} - ${num4} = ${num3 - num4}`);
//3
let num5= Number (readLine.question ("Enter Number:  "));
let num6= Number (readLine.question ("Enter 2nd number:  "));
console.log(`${num5} * ${num6} = ${num5 * num6}`);
//4
let num7= Number (readLine.question ("Enter Number:  "));
let num8= Number (readLine.question ("Enter 2nd number:  "));
console.log(`${num7} / ${num8} = ${num7 / num8}`);
//5
let num9= Number (readLine.question ("Enter Number:  "));
let num10= Number (readLine.question ("Enter 2nd number:  "));
console.log(`${num9} % ${num10} = ${num9 % num10}`);
//6
let nam2= readLine.question ("please enter your first name:  ");
let nam1= readLine.question ("please enter your last name:  ");
console.log(` hello ${nam2} ${nam1} `);
//7
let nam2= readLine.question ("please enter your first name:  ");
let nam1= readLine.question ("please enter your last name:  ");
let question = readLine.question( "what is you a mr,mrs, or ms")
if (question == "mr") {
    console.log(`hello mr ${nam1}`);
} else if (question == "mrs") {
    console.log(`hello mrs ${nam1}`);
} else if (question == "ms") {
    console.log(`hello ms ${nam1}`);
}
//8
let nam1= readLine.question ("what is your street name:  ");
let nam2= readLine.question ("what is your street type:  ");
let nam3= readLine.question( "what is your city:");
let nam4= readLine.question( "what is your state:");
let nam5= readLine.question( "what is your zip:");
console.log (`your address is ${nam1},${nam2},${nam3},${nam4},${nam5}`);