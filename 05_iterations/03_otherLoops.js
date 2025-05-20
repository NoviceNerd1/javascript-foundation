// for of


["", "" ,""]
[{},{},{}]


//for(const iterator of object){  -> object = the element being iterated
//
//
//}

const arr=[1,2,3,4,5]

for(const num of arr){
//console.log(num)
}
const greetings = "Hello World!"
for(const i of greetings){
if(i==" "){
continue;
}
//console.log(`${i}`)
}



// MAPS

const map= new Map()
map.set("IN","India")
map.set("USA","United States of Americ")
map.set("UK", "United Kingdom")
map.set("Fr","France")
map.set("IN","India")
//console.log(map)

for(const [key,values] of map){
//console.log(key,':- ',values)
}


const obj= {
	'game1': 'NFS',
	'game2': 'Spiderman'
}

for(const key of obj){
console.log(key,' : ',values )
}




























