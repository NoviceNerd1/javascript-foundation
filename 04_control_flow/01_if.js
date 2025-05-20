// if 

const isUserLoggedIn = true

//if(isUserLoggedIn){

//}

// comparsions - <, >, <=, >=, == , !=, === (also checks data type) 


//if(2=="2"){
//console.log("Executed!")
//}
// OUTPUT : True (Executed)


//if(2==="2"){
//console.log("Executed!")
//}
// doesnt get executed

//const temperature=55;

//if(temperature<50){
//console.log("less than 50")
//}else{
//console.log("greater than 50")
//}

//const score= 200

//if(score>100){
//	const power="space-time talent, unlimited comprehension"
//	console.log(`User power: ${power}`)
//}

//console.log(`User power: ${power}`)

//const balance=1000


//1- if(balance>500) console.log("test");	
//2- if(balance>500) console.log("test"),console.log("test2"); 
//2-> is not a good practice in  organisatins

//if(balance<500){
//console.log("Less than 500")
//}else if(balance < 750){
//console.log("Less than 750")
//}else{
//console.log("Less than 1200")
//}
	
const userLoggedIn = true;
const debitCard= true;
const loggedInFromGoogle= false;
const loggedInFromEmail = true;

if(userLoggedIn && debitCard){
	console.log("Allowed to buy!")
}else{
	console.log("Not allowed")
}

if(loggedInFromGoogle || loggedInFromEmail){
	console.log("user is logged in!")
}































