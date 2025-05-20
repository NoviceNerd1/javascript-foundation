const user= {
	username: "ASUS laptop",
	price: 99990,

	welcomeMessage:function(){
		console.log(`${this.username}, welcome to the website`)
	//	console.log(this)
	}

	//console.log(this.username)
}

//user.welcomeMessage()
//user.username= "Acer laptop"
//user.welcomeMessage()
//console.log(this)	// give {} - in node scope, obj is {}
			// in browser , it gives windows obj, etc
			// in node env its empty {}


//function chai(){
//	let username= "Rishi"
//	console.log(this.username);	// this.username doesn't work in function, only in object
//}

const chai= () => {		
	let username= "Rishi"
	console.log(this);	
}


//chai()


//const addTwo = (num1,num2) =>{
//	return num1+num2
//}

//const addTwo = (num1,num2) => num1+num2

//const addTwo = (num1,num2) => {return (num1+num2) }
// is used {}  - return is necessary
// is used without any or with () - return not needed - will give error is added

//const addTwo = (num1, num2) => ({username:"Rishi"})

//console.log(addTwo(2,4))

//const myArr = [2,3,5,6,1]
//myArr.forEach(() =>{})




















































