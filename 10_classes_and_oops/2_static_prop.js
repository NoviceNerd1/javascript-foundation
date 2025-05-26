class User{
	constructor(username){
		this.username = username;
	}

	logMe(){
		console.log(`Username: ${this.username}`);
	}

	static createId(){
		return `123`;
	}

}



const ele = new User("Rishi")
//console.log(ele)
//console.log(User.createId())
//ele.logMe()


class Teacher extends User{

	constructor(username, email){
		super(username)
		this.email = email
	}
}

const iphone = new Teacher("iphone", "i@p.com")
//console.log(iphone)
//iphone.logMe()
//console.log(Teacher.createId())

// Types of static functions or patterns
// 1) Utility funciton class
class StringUtils{
	static capitalize(str){
		return str.charAt(0).toUpperCase() + str.slice(1)
	}

}

console.log(StringUtils.capitalize("rishi"))



//2) Factory Pattern
class User1{
	constructor(name){
		this.name = name;
	}

	static createGuests(){
		return new User("Guest");
	}
}

const guest = User1.createGuests();
console.log(guest.name())




//3) Static Inheritance 

class Animal{
	static info(){
	}
}

































