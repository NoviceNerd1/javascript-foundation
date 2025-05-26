class User{
	constructor(username){
		this.username = username
	}
	logMe(){
		console.log(`Username: ${this.username}`);
	}
}

class Teacher extends User{
	constructor(username, email, password){
		super(username) // similar to function.call(this, username) -> super goes to class we extended from and access the super object and get its values
		this.email= email
		this.password= password
	}
	
	addCourse(){
		console.log(`A new course was added by ${this.username}`);
		}
}



const ele = new Teacher("rishi", "abc@gmail.com","123")
console.log(ele)

ele.addCourse()

const ele2 = new User('singh')

ele2.logMe()


ele.logMe();

console.log(ele instanceof Teacher)
console.log(ele2 instanceof Teacher)











