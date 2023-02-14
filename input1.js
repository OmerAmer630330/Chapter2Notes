const readline= require("readline-sync")

let tip = 1.60;
let price = 20;
let newprice = 21.60;
let question = readline.question("what is the cost?");
if(question == "21.60"){
    console.log(`thank you`)
}else {
    let question2 = readline.question( "error try again");
if (question2 == "21.60") {
    console.log('Thank You')
} else {
    console.log('total cost 21.60')
}
}

