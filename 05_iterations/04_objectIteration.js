const myObj = {
	js:'javascript',
	cpp:'c++',
	rb:'ruby',
	swift: "Swift by apple"
}

for(const key in myObj){
//console.log(`${key} is shortcut for ${myObj[key]}`)
}

const a=['a','b','c','e','d','t','w']

for( const key in a){
	//console.log(`${a[key]} is at index ${key}`)
}


const map= new Map()
map.set("In","India")
map.set("UK","United Kingdom")
map.set("Fr","France")
map.set("Ire","Ireland")

//for(const key in map){
//	console.log(map.value)
//}

// MAPS ARE NOT ITERABLE :/






















