// singleton -> created using object.create -> object from constructer method 

//object literal -> created simply using "{key:value}" pairs

const mySym = Symbol("keys1")

const JsUser= {
name:"Rishi",
age: 2,
location:"Heaven Realm",
email:"abc@sadasc.com",
isLoggedIn: true,       // True is not defined in JS - true/false => bool
lastLoginDays:["Monday","Tuesday"],
"Full Name":"Rishi Singh",
// mySym:"mykey1" -> wont give error , but it will treate mySym as string
[mySym] : "mykey1" // to use mySum as Symbol
}

//console.log(JsUser);


//
// Accessing object values
//
 
//console.log(JsUser.name) // should know but can raise errors
//console.log(JsUser.full name) // ofc it'll give error - therefore this method of accessing objects is not perfect
//console.log(JsUser["Full Name"]) // that's why u  need this,it works
				// INTERSTING-> if u write wrong key name , it will log 'undefined' not error
//console.log(JsUser[location]) -> gives error(ReferenceError: location is not defined) ->keys are treated as strings by Default
//console.log(JsUser["location"]) // that's why this works

//console.log(typeof JsUser[mySym])


//JsUser.email = "aasd2@sewf.com"
//Object.freeze(JsUser)
//JsUser.email= "asdasdqwe@werewr.com"
//console.log(JsUser["email"])
//console.log(JsUser) // symbol key will show as [Symbol(keys1)]:'mykeys1'

//JsUser.greeting = function(){
//	console.log("I am JS User");
//}

//console.log(JsUser.greeting); // reaches the function,that's it. returns [Function (Anonymous)]
//console.log(JsUser.greeting()); // logs output but also makes extra log and gives 'undefined'

JsUser.greetingTwo = function(){	// "full name" didnt work
console.log(`Hello, I am ${this.name}`); // this.name works fine
}

console.log(JsUser.greetingTwo())
