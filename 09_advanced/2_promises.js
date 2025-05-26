const promise1 = new Promise(function(resolve,reject){
	// do an async task
	// db calls, cryptography , network
	setTimeout(function(){
		console.log('Async task is completed')
		resolve();
	},1000)
});

promise1.then(function(){
//	console.log("Promise Consumed")
})


// directly creating promise

new Promise(function(resolve,reject){
	setTimeout(function(){
		console.log("Async Task 2");
		resolve();
	},1000)
}).then(function(){
	console.log("Async 2 resolved")
})

// pri
const promise3 = new Promise(function(resolve,reject){
	setTimeout(function(){
		resolve({username: 'Coding in JS', email:"abc@xyz.com"})
	},1000)
})


promise3.then(function(user){
	console.log(user);
})


const promise4 = new Promise(function(resolve,reject){
	setTimeout(function(){
		let error= false;
		if(!error){
			resolve({username:'Rishi', password:"123"})
		}else{
			reject('Error: Something went wrong')
		}
	},1000)

})


promise4
	.then((user)=>{
	console.log(user)
	return user.username
})
	.then((username)=>{
	console.log(username)
})
	.catch(function(error){
console.log(error);
}).finally(()=> console.log("The promise is either resolved or rejected!"))

const promise5 = new Promise(function(resolve,reject){

	setTimeout(function(){
		let error= true;
		if(!error){
			resolve({username:"Rishi11", password:"111111123"})
		}else{
			reject('Error: JS WENT WRONG!!!!!!!!')
		}
	},1000)
})


async function consumePromise5(){
	try{
	const response = await promise5;
	console.log(response)
	}
	catch(error){
		console.log(error)
	}
}
consumePromise5()


async function getAllUsers(){
	try{
	const res= await fetch('https://jsonplaceholder.typicode.com/users')

	const data = await res.json();

	console.log(data)
	}
	catch(error){
		console.log(error)
	}
}

//getAllUsers()



fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
 return response.json();
})
.then((data)=>{
console.log(data)
})
.catch((error)=>{
console.log(error)
})
.finally(()=>{
console.log("Fetch api is DONEEEE!!!!")
})





















