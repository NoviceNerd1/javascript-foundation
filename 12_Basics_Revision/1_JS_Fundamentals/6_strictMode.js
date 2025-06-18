"use strict"


function strictExample(){
	//y=20; // gives, ref error : y is not defined
	
	let y=20; //works fine
	console.log("Local Strict y:",y);
}
strictExample();
