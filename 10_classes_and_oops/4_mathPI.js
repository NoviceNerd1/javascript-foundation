const descriptor = Object.getOwnPropertyDescriptor(Math,'PI')

console.log(descriptor)

//const myObj = Object.create(null)
//console.log(myObj)

const newObj = {
	name:"Laptop",
	price:23442,
	isAvailable: true,
	chaiChahiye:function(){
		console.log(`chai nahi bani`)
	}
}


console.log(newObj)

//console.log(Object.getOwnPropertyDescriptor(newObj,"name"))

Object.defineProperty(newObj,'name',{
	writable:false,
	enumerable:true
})

console.log(Object.getOwnPropertyDescriptor(newObj,'name'))


newObj.name = "APPLE"

//console.log(newObj.name)

for(let [key,value] of Object.entries(newObj)){
	if(typeof value!== 'function'){
	console.log(`${key} : ${value}`)
	}
}















