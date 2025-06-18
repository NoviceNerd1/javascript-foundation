// "switch" statement
//


// it can replace multiple ifs
//
// SYNTAX:
//
// switch(x){
//	case "value1" : if(x==="value1")
//	...
//	[break]
//
//	case "value2" : if(x==="value2")
//	...
//	[break]
//
//	default:
//	...
//	[break]
// }



// 1) value of x is checked for a strict equality to the value from the first case then to the second and so on.
// 2) if the equality is found, switch starts to execute the code starting from the corresponding case, until the nearest break.
// 3) if no case is matched then the dafault code is executed


// example

let a = 2+2;

switch(a){
	case 3: 
		console.log("too small");
		break;
	
	case 4:
		console.log("Exactly!");
		break;
	case 5:
		console.log("too big!");
		break;
	default:
		console.log("I dont know!")
}

//All will execute after a right case is FOUND
//switch(a){
//	case 3: 
//		console.log("too small");
//
//	case 4:
//		console.log("Exactly!");
//	case 5:
//		console.log("too big!");
//	default:
//		console.log("I dont know!")
//}

// Any expression can be a switch/case argument
// both switch and case allow arbitray expression


a = "1";
let b= 0;

switch(+a){
	case b+1:
		console.log("this runs becase +a is 1, exacty equals b+1");
		break;

	default:
		console.log("this doesnt run")
}


// Grouping of "case"
//
// if several variabnts of case share the same code , can be grouped.

console.log("\nGrouping of 'case'")
a = 3;

switch(3){
	case 4:
		console.log("Right!");
		break;
	
	case 3:
	case 5:
		console.log("Wrong!");
		console.log("Why dont u just ask me to calculat ethe future?");
		break;

	default: 
		console.log("This result is stramge Really")
}


// Type matters

// equality check is always strict. The values must be of SAME TYPE to match.
//

let arg = "0"

switch(arg){
	case '0':
	case '1':
		console.log('one or zero');
		break;
	
	case '2':
		console.log('Two');

	case '3':
		console.log('Never executes!');
		break;
	
	default:
		console.log("Unknown value")

}























