const userEmail= "a@gmail.com"
const userEmail2= ""
const userEmail3= []

if(userEmail3){
console.log("Have email")
}else{
console.log("Dont have email")
}

// falsy values
//
// values: false, 0, -0, BigInt 0n, "", null, undefined, NaN
//
// Truthy values
//
//  ------->values except falsy values are truthy
//
// values: "0", 'false', " ", [],{},function(){}


//if(userEmail3.length==0){
//	console.log("Array is empty")
//}


const emptyObj={}

if(Object.keys(emptyObj).length===0){
console.log("Object is empty")
}

// if (false == 0) => true
// if (false == '') => true
// if (0 == '') => true


// Nullish Coalescing Operator (??) : null undefined

//let val1;
//val1= 10??5 	// used in DB- get two vals(null, other val)

//val2= null?? 19
//val1 = undefined??15
// both move to second valid val


//val1= null?? 10?? 20;

//console.log(val1)



// Terniary Operator
// condition? true : false

const iceTeaPrice=100
iceTeaPrice <=80 ? console.log("Left than 89"): console.log("More than 80");



















