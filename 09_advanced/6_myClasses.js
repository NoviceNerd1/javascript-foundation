// ES6

class User{
	constructor(username, email,password){
		this.username = username
		this.email = email
		this.password = password
	}

	encryptPass(){
		return `${this.password}abc`
	}

	changeUsername(){
		return `${this.username.toUpperCase()}`
	}
}

const ele = new User("Rishi", "abc@def.com", "213214")

console.log(ele.encryptPass())
console.log(ele.changeUsername());


// behind the scenes

function users1(username, email, password){
	this.username = username
	this.email = email
	this.password= password
}

users1.prototype.encryptPassword = function(){
	return `${this.password}abc`
}

users1.prototype.changeUsername = function(){
	return `${this.username.toUpperCase()}`
}

const tea = new users1("Singh", "abc@gnasdf.com", "21324")
console.log(tea)
console.log(tea.encryptPassword())
console.log(tea.changeUsername())























