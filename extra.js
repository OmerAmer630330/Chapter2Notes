const readline= require("readline-sync")
let tip = 1.6;
let price = 20;
let newprice = 21.6;
let question = readline.question("would you like to know the cost?");
if(question == "yes"){
    console.log(`${newprice}`)
}else
if ( question =="no") {
    console.log(`ok i will come back later`)
}
const readline= require("readline-sync")
let tip = 1.6;
let price = 20;
let newprice = 21.6;
let question = readline.question("what is the cost?");
if(question == "21.6"){
    console.log(`thank you`)
}else {
    console.log(`error`)
}
const readline= require("readline-sync")
let tip = 1.6;
let price = 20;
let newprice = 21.6;
let question = readline.question("would you like to know the cost?");
if(question == "yes"){
    console.log(`${newprice}`)
    let question2 = readline.question( "How is the service");
    if (question2 == "good") {
        console.log(`20% tip`)
    } else
    if (question2 == "great") {
        console.log(`15% tip `)
    } else
    if (question2 == "alright") {
        console.log(`10% tip`)
    }else
    if (question2 == "not good") {
        console.log(`5% tip`)
    }else
    if (question2 == "bad") {
        console.log(`no tip`)
    } else
    if (question2 == "horrible") {
        console.log(`no tip`)
    }
}else
if ( question == "no") {
    console.log(`ok i will come back later`)
//question1
    const readLine = require("readline-sync")
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