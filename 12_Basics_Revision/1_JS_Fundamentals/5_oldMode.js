function oldJS(){
	x=10;
	console.log("Local x:",x);
}

oldJS()


console.log("Global x:",x); // x leaks globally
