function setUsername(username){
	// complex db calls
	this.username = username
	console.log("Called")
}

function createUser(username, email, password){
	setUsername.call(this, username) // call -> calls another function holding its reference, this,username -> means we are using this of the other function, then its getting passed to current function

	this.email= email
	this.password = password
}


const chai = new createUser("Rishi","abc@def.com", "123")
console.log(chai)






















