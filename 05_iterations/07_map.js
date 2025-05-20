const myNumbers = [1,2,3,4,5,6,7,8,9,10]

const newNums= myNumbers.map((num)=>{return num+10})

//console.log(newNums)

myNumbers.forEach((val)=>{

//console.log(val)
})


const newN = myNumbers
			.map((num) => num*10)
			.map((num) => num+2)
			.filter((n)=> n>40)


console.log(newN)



















