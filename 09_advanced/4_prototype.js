let myName = "hitesh       "

//console.log(myName.trueLength())
// trueLength that gives only true len , not spaces


let myHeros=["thor","spiderman"]

let heroPower= {
	thor: 'hammer',
	spider: 'sling',

	getSpiderPower: function(){
		console.log(`spidy power is ${this.spiderman}`);
	}
}

Object.prototype.rishi= function(){
console.log("RIshi is present Everywhere!")
}

Array.prototype.hiRishi = function(){
console.log("Array has Rishi's powers!")
}


//heroPower.rishi()

//myHeros.rishi()

myHeros.hiRishi()
//heroPower.hiRishi()


// Inheritance

const USER = {
	heroName:"Rishi",
	powers:"STEAL"
}

const Teacher= {
	makeVideo : true
}
const TeachingSupport={
	isAvailable: false
}

const TASupport = {
	makeAssignment: "JS Assignment",
	fulltime:true,
	__proto__: TeachingSupport
}


Teacher.__proto__ = USER

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher);

console.log(TASupport.isAvailable)

let anotherUserName = "I AM God of Replication with infinite Epiphananies                                                "


// solving the Initial problem
String.prototype.trueLength = function(){
console.log(`${this}`)
	console.log(`${this.name}`)
	console.log(`True length is: ${this.trim().length}`)
}

anotherUserName.trueLength();

















String





