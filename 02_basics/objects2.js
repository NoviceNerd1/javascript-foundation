//const tinderUser= new Object()
const tinderUser= {
}


tinderUser.id= "123asd"
tinderUser.name= "Sammy"
tinderUser.isLoggedIn= false;



//
//
//console.log(tinderUser);


const regUsr = {
	email:"abc@gmail.com",
	fullname: {
		userfullname: {
			firstname:"Rishi",
			lastname:"Singh"
		}
	}
}



//console.log(tinderUser.id)
//console.log(regUsr.fullname?.userfullname?.firstname)

const obj1 = {1:'a',2:'b',3:'c'}
const obj2 = {4:'a',5:'b',6:'c'}
const obj3 = {7:'a',8:'b',9:'c'}

//const obj3= {...obj1,...obj2}		// obj1,obj2 -> adds both as objects, '...' speard ele and add them in obj3

const obj4= Object.assign({},obj1,obj2,obj3) // Object.assign(target,source)

//console.log(obj4)


const users=[
	{
		id:2,
		email: "a@gmail.com"
	},
	{
		id:2,
		email: "a@gmail.com"
	},	
	{
		id:2,
		email: "a@gmail.com"
	},	
	{
		id:2,
		email: "a@gmail.com"
	},
]

//console.log(users[1])
//console.log(tinderUser)

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(Object.entries(tinderUser))

//console.log(tinderUser.hasOwnProperty('isLoggedIn'))

//console.log(tinderUser.hasOwnProperty('isLogged'))



// Object/array Destructuring

const course = {
	coursename:"js in Hindi",
	price:"22323",
	courseInstructor:"Rishi"
}

console.log("The sphagetti user way: ",course.courseInstructor)

// both are same , destructuring
//const {courseInstructor} = course
const {courseInstructor :instructor} = course


console.log("Destructured, Pro's way: ",instructor)

// in react  mostly
//const navbar = ({company})=>{ // company == props.company
//
//}
//navbar(company="Rishi")

//JSON - Javascript Object Notation - send object data in API
// JSON in object way 
//{
//	"name":"histesh",
//	"course":"js in hindi",
//	"price":"free"
//}

// json in array
// [
//	{},
//	{},
//	{},
// ]



































































