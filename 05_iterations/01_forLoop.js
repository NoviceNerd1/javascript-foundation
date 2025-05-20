// For

for(let ind= 0; ind<10;ind++){
	const ele= ind;
	if(ele==5){
//	console.log("5 is the best!")
	}
//	console.log(ele);
}


for(let i=10; i<=20; i++){
//	console.log(`Outer loop ${i}`)
	for(let j=0; j<10;j++){
//		console.log(`Inner loop ${j} and inner loop ${i}`)
	}

}


for(let i=10; i<=20; i++){
//	console.log(`Outer loop ${i}`)
	for(let j=0; j<10;j++){
//		console.log(` ${i} * ${j} = ${j*i}`)
	}

}

let myArr=["flash","Hulk", "Superman","Batman"]
//console.log(myArr.length)

for(let i=0; i<myArr.length; i++){
//	console.log(`${myArr[i]} `)
}


for(let i=0;i<=20;i++){
	if(i==5){
		console.log(`Found the lucky no ${i}`)
		break;
	}
//	console.log(`element: ${i}`)
}


for(let i=0;i<=10;i++){
	if(i>=5){
		console.log(`Found the lucky no ${i}`)
		continue;
	}
	console.log(`element: ${i}`)
}



























