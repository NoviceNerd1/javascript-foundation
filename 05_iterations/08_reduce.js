
const myNums= [1,2,3]

const total= myNums.reduce(function(acc,currVal){
	console.log(`acc:${acc} and currVal: ${currVal}`)
	return acc+currVal
},4)

//console.log(total)

const myTotal = myNums.reduce((acc,curr)=> acc+curr,0 )

//console.log(myTotal)


const shoppingCart= [
	{
		itemName:"Js course",
		price:8000
	},	{
		itemName:".net course",
		price:5000
	},	{
		itemName:"python full stack course",
		price:4000
	},	{
		itemName:"CP course",
		price:20000
	},

]

let sum= shoppingCart.reduce((acc,curr)=> curr.price+acc, 0)

console.log(sum)












































