// Object Methods & "this"

// Objects can store both data and behaviour (methods)

let user = {
	name: "John",
	age:30,

	// Method shorthand syntax
	sayHi(){
		console.log("Hello! Objects method and this");
	}
};

user.sayHi();


// OOP: Object oriented Programming

/*

1) Using objects to model real world real-world entities
2) Methods = actions the object can perform
3) Foundation for large-scale architecture

*/

// Recomended : Method shorthand

user = {
	sayHi() {
		console.log("HEEELLLLLOOOOO!!!!!");
	}

};

user.sayHi()


// "this" keyword in methods

let user2 = {
	name:"Alice",
	sayHi(){
		console.log(this.name);
	}  // usess the object calling the method
};

user2.sayHi()



// BAD : rerefencing object directly inside method

let user3 = {
	name : "Eve",
	sayHi() {
	//	console.log(user3.name);  // fragile
	}
};

let admin = user3;

user3=null;

admin.sayHi(); // type error: can't read properties of "null"


// Safe version

let user4 = {
	name:"Bob",
	sayHi() {
		console.log(this.name);
	}
};

let manager  = user4;
user4 = null;

manager.sayHi();


// "this" is NOT BOUND in JS

// "this" is evaluated at runtime based on "how" a function is called - not where it's defined

function sayHi() {
	console.log(this.name);
}

user = {name:"King"};
admin = {name:"Emperor"};

// Assign same function to different objects
user.f = sayHi;
admin.f = sayHi;

user.f();
admin.f();
admin['f']();


// Calling without object context

function showThis() {
	console.log(this);
}

showThis();  // In strict mode -> undefined, in sloppy mode -> window (global object)


// Unlike many other languages, JS doesnt *bind* 'this' to object methods

let obj = {
	method : sayHi
};

// Function is declared in global scope, but context (this) is set at call time
obj.method();  // this == obj


// Arrow function dont have their own `this`
// They inherit it form their outer (lexical) scope

console.log("Arrow function dont have this, takes from outer scope: ");

let user5 = {
	name: "Alice",
	greet() {
		const arrow = () => console.log(this.name);
		// takes 'this' from 'greet'

		arrow();  // "Alice"
	}
}

user5.greet();  // "Alice"

// Mistake : assigning method to variable loses context

let user6 = {
	name: "Bob",
	sayHi() {
		console.log(this.name);
	}
}


let hi = user6.sayHi;

hi();  // undefined (in strict mode), because 'this' is lost


// Fix : bind 'this' or use arrow inside wrapper

let boundHi = user6.sayHi.bind(user6);
boundHi();  // "Bob"


// Summary : Object Methods and 'this'

// 1) Function stored in object properties are called "methods"

let user7 = {
	name: "John",
	sayHi() {
		console.log("John is saying HELLO!");
	}
};

user7.sayHi();  // Method call: object.doSomething();

// 2) Inside a method, 'this' refers to the object the method was called on

admin = {
	name: "Admin Josh",
	greet() {
		console.log(this.name);
	}
}

admin.greet();  // "Admin Josh"


// 3) The value of 'this' is determined *at runtime*, when the function is called 

function sayName() {
	console.log(this.name);
}

let guest = {name:"Guest", speak: sayName};
let member = {name:"Member", speak:sayName};

guest.speak();  // "Guest"
member.speak();  // "Member"


// 4 ) Function 'this' has no value until its *called*

let orphan = sayName;
orphan();  //undefined(strict mode) or 'window.name'(sloppy mode)


// 5) Arrow Function have no 'this' - they capture 'this' from their outer scope

let person = {
	name:"Ilya",
	sayHi() {

		let arrow = () => console.log(this.name); // this comes from sayHi's context
		arrow();
	}
};

person.sayHi();


// 6) Common gotcha : copying methods without binding loses `this`

let loseContext = user6.sayHi;
loseContext();




//function makeUser() {
//	return {
//		name: "John",
//		ref:this,  // not what you might expect
//	};
//}

//let user8 = makeUser();

//console.log(user8.ref.name);  // undefined

// FIX

function makeUser() {
	return {
		name:"John",
		ref() {
			return this;
		}
	}
}

let user8 = makeUser();
console.log(user8.ref().name);  // "John"



// 2 CALCULATOR Object with read, sum, and mul

let calc = {
	a: 6,
	b: 8,

	read() {
		this.a = 4;
		this.b = 6;
	},

	sum() {
		return this.a + this.b;
	},

	mul() {
		return this.a * this.b;
	}
};


calc.read();
console.log(calc.sum());
console.log(calc.mul());


// 3 . Chaining the ladder Object

let ladder = {
	step : 3,

	up() {
		this.step++;
		return this;  // Enables chaining
	},

	down(){
		this.step--;
		return this;
	},

	showStep() {
		console.log(this.step);
		return this;
	},
};


// Now u can chain
ladder.up().up().down().showStep().down().showStep();  // 4 then 3

// Why it works?
// Each method returns the object itself(this), enabling method chaining like jQuery or fluent APIs.

// Similar to "Promises"




















































