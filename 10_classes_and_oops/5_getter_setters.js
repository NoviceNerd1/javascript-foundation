class User{
	constructor(email,password){
		this.email=email;
		this.password= password


	}

	get email(){
		return this._email.toUpperCase()
	}

	set email(value){
		this._email= value;
	}


	get password(){
		return `${this._password}RIshi`
	}
	set password(value){
		this._password = value
	}
}
// u get an intersting error, "Max call stack size excedded"
// Reason: both constructor and get/set start competing to assign value and they both call for value, and exceed the stack size


const newObj = new User("Rish@google.com","abc")
console.log(newObj.password)
console.log(newObj.email)
