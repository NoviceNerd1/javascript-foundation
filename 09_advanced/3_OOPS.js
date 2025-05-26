const user={
	username: "Rishi",
	loginCount: 9,
	signedIn: true,

	getUserDetails: function(){
		//console.log("Got user details")
		//console.log(`username: ${this.username}`)
		//console.log(this)
	}
}

//console.log(user.username)
//console.log(user.getUserDetails())

//const promise1 = new Promise()
//const date = new Date()
// new is used to create new context of specified function


function userFunc(username, loginCount, isLoggedIn){

	this.username= username;
	this.loginCount= loginCount;
	this.isLoggedIn= isLoggedIn;

	this.greeting = function(){
		console.log(`Welcome ${this.username}`)
	}
	//return this //- is already done by DEFAULT
}

const user1 = new userFunc("rishi", 99, true);
const user2 = new userFunc("Singh",88, false);
//console.log(user1.greeting())
//console.log(user2.greeting())
//console.log(user1.constructor)


function car(make, model, year){

	this.make= make;
	this.model = model;
	this.year = year;
}

const auto = new car('Honda', "Accord", 1998);

console.log(auto)
console.log(auto instanceof car)
console.log(auto instanceof Object)



function multiplyBy5(num){
return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(5))
console.log(multiplyBy5.power)
console.log(multiplyBy5.prototype)



function createUser(username, score){
	this.username = username
	this.score = score
}

createUser.prototype.increment = function(){
	this.score++;
}

createUser.prototype.printMe = function(){
	console.log(`score ${this.score}`)
}

const chai = new createUser('chai',25)
const tea = new createUser('tea', 200)

console.log(chai)
console.log(tea)


chai.printMe()



























