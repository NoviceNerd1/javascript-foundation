const User ={
	_email:'Ras@er.com',
	_password:"wqwe",

	get email(){
		return this._email.toUpperCase()
	},
	set email(value){
		this._email=value
	},

	get password(){
		return this._password.toUpperCase()
	},
	set password(value){
		this_password=value
	},
}

// create new obj based on existing obj
const newUser = Object.create(User)

console.log(newUser)
console.log(newUser.email)
console.log(newUser.password)













