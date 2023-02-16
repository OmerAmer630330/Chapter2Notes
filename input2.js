const readLine = require('readline-sync');

//1
let nam1= readLine.question ("what is your street name:  ");
let nam2= readLine.question ("what is your street type:  ");
let nam3= readLine.question( "what is your city:");
let nam4= readLine.question( "what is your state:");
let nam5= readLine.question( "what is your zip:");
console.log (`your address is ${nam1},${nam2},${nam3},${nam4},${nam5}`);