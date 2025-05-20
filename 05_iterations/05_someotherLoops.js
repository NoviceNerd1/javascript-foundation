const coding= ["js","ruby","java","python","cp"]

coding.forEach( function (item){
//console.log(item);
})

coding.forEach(function (val){
//console.log(val);
})

coding.forEach((ele)=>{
//console.log(ele);
})


function printMe(item){
//console.log(item);
}

coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
//console.log(`item: ${item}, index : ${index}, arr: ${arr} `)
})

const myCoding= [
	{
		languageName:"javascript",
		languageFileName:"js"
	},	{
		languageName:"C++",
		languageFileName:"cpp"
	},	{
		languageName:"java",
		languageFileName:"java"
	},	{
		languageName:"python",
		languageFileName:"py"
	},
]





myCoding.forEach((val)=>{

console.log(`${val.languageName} ${val.languageFileName}`);
})

































