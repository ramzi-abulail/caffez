let theName = window.prompt("Enter you name", "");
let gender = window.prompt("your gender", "");

if (gender == "male"){
    window.alert("Welcome Mr " + theName);
} else if (gender == "female"){
    window.alert("Welcome Ms "+ theName)
} else
    window.alert("Welcome " + theName);

let hotCold = window.prompt("do you want it hot or cold", "");
let drink = window.prompt("what is your drink", "");
let prepared = window.alert("Your Drink is being Prepared");

console.log("Name : " +  theName +'\n'  +"Drink : " + drink);