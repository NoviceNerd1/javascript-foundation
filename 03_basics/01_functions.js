function sayMyName(){
console.log('R')
console.log('I')
console.log('S')
console.log('H')
console.log('I')

}

//sayMyName()


//function addTwoNumbers(num1, num2){
//	return num1+num2
	//console.log(num1-num2);
//}

function addTwoNumbers(num1, num2){
	let res= num1+num2
	return res
}
//console.log(addTwoNumbers()) // if u run function without num it give NaN

//console.log(addTwoNumbers(6,8));  -> for return 

const reslt= addTwoNumbers(5,"9");  // function is logging the val in console, not returning anything

//console.log("REsult: ",reslt);

// if string added in num, itll be coerced into string
// otherwise if its - , *, \ -> itll be coerced into num 


function loginUserMessage(username){
	if(!username){
		console.log("Please enter a valid username")
		return
	}
	return `${username} just logged in`
}

//console.log(loginUserMessage("Rishi")) // prints as is

//console.log(loginUserMessage(""))	// prints without name "  just logged in" ; some space then the rest -> if empty string is given

//console.log(loginUserMessage())		// prints : "undefined just logged in" -> if no input is given



// ... spreads all in array, and if val1,val2  then 1 and 2 value will be assinged to val1 and val2 , then rest will be to ...num1

function calculateCartPrice(val1,val2,...num1){		// ... - rest operator or spread operator -> puts all data in array
	return num1;
}

console.log(calculateCartPrice(200,300,400))

const user= {
	username:"rishi",
	price:2000000
}

function handleObject(anyObj){
	console.log(`Username is ${anyObj.username} and price is ${anyObj.price}.`)
}

handleObject(user) // assign obj

handleObject({
	username:"Rishi",
	price:30000000
}) 				// giving object directly

function returnSecondValue(getArr){
	return getArr[1];
}

console.log(returnSecondValue([23,25,64,221,78]));





















































