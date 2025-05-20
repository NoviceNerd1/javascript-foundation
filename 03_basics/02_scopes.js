

let a= 300
const b=90
if(true){
let a=10
const b= 20
//c= 30			// var c and c , are SAME!!!
console.log("Inner: ",a)
console.log("Inner: ",b)
}


console.log(a)
console.log(b)
//console.log(c)		// var is getting printed on console
			// even tho it is not in global scope





function one(){
	const username="rishi"

	function two(){
		const website="youtube"
		console.log(username);
	}
	//console.log(website);

	two()
}

//one()


if(true){
	const username = "Rishi"

	if(username==="Rishi"){
		const website= " youtube"
		console.log(username+website)
	}
	console.log(username)
//	console.log(website)
}

//console.log(username)

// ================= INTERESTING ========================
console.log(addOne(5)) 
function addOne(num){		// in this function declaration
	return num+1		// we can initialize it before
}

//console.log(addOne(5))
//console.log(addTwo(2)) // cant initialize before declaration
const addTwo = function(num){
	return num+2;
}

//console.log(addTwo(2))
























