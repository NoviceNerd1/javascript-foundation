// LOOPS : WHILE AND FOR 

// while loop

// while(condition){
//	... statement...
// }


console.log("While loop")
let i = 0;
while(i<3){
	console.log(i);
	i++;
}

// single execution of loop body is called an iteration.
//
// any expressio or variable can be loop condition, not just comparision: condoition is evaluated or converted to boolean by while

i = 3;
while(i){	// i-> true , until i>0, when i=0-> false =>loop stops

	console.log(i);
	i--;

}

// "do...while" loop

// do{
//	// loop body
// }while(condition)

// loop will first execute the body then check the condtion and while its truthy itll execute again and again.

console.log("\nDo while loop:")
i=0;

do{
	console.log(i);
	i++;
}while(i<4)

// this should be used when u want the loop to execute atleast once



// "for" loop

// for(begin; condition ; step){
//	// ... loop body ...
// }
console.log("\nFor loop")

for(let i=0; i<3; i++){
	console.log(i);
}

// Examine for statement part-by-part:
//
// 1) begin 	| let i = 0  |executes once upon entering loop
// 2) condition | i < 3      | checked before every loop, stops on false
// 3) body	| console    | Runs again and again while condition is truthy
// 4) step	| i++	     | Executes after the body on each iteration.
//
// Execution sequence of loop: begin -> condition -> body -> step-> Repeat

// Inline variable declaration
// 'inline' variable visible only inside the loop.
console.log("\nInline variable")
for(let a = 0; a<4 ; a++){
	console.log(a);
}
//console.log(a)



// Skipping parts
//
// any part of for can be skipped
//
// for ex, begin can be skipped , if already declared before

console.log("\nSkipping begin of loop")

i=0;
for(; i<3;i++){
	console.log(i);
}

// we can also skip "step part"
console.log("\nSkipping step part of loop")
i=0;
for(; i<3;){
	console.log(i++);
}



// Breaking the loop

// we use special break directive to force exit loop

let sum =0;
let val=4

while(true){
	val -=1;
	if(!val)break;
	sum+= val;
}

console.log("Sum: "+sum)

// CONTINUE TO THE NEXT ITERATION

// continue is "lighter version" of break. 
// it skips current iteration and continues with next time
console.log("\nUsing CONTINUE:")
for(i=0; i<10;i++){
	if(i%2==0){
		continue;
	}
	console.log(i)
}


// No break/continue to the right side of "?"
//
// syntax constructs that are not expression connot be used with ternary operator ?.
// Directives such as break/continue aren't allowed there.

//if(i>5){
//	console.log(i)
//}else{
//	continue;	// illegal continue : without iteration
//}


//(i>5) ? console.log(i):continue;
// unexpected continue




// Labels for break/contine

// ordinary break only breaks current loop and comes to outer loop and continues. 
//
// But what if we want to completely come out of the loop?
//
// For that we use : LABELS !
//
// labelName: for(){
//	...
// }


const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output:process.stdout
});

function ask(question){
	return new Promise(resolve=> rl.question(question,answer => resolve(answer.trim())));
}


(async function main(){
	outer:for(i = 0; i < 3; i++){
		for(let j=0; j<3 ; j++){
			const input= await ask(`Value at coords (${i},${j}): `);

			if(!input){
				console.log('Input cancelled. Breaking out....');
				break outer;
			}

			console.log(`-> (${i},${j})="${input}"`)
		}
	}
	console.log("Done!")
	rl.close();
})();






// Labels do not allow to "jump" anywhere
//
// Labels do not allow us to jump into any arbitrary place in the code
//
// break label;	// intend to jump below label(doesn't work)
//
// label : for(..){...}

// a "break" directive must be inside a code block. Technically any block will do. 
//
// label: {
// // ..
// 	break label;
// // ...
//
// }
//
// but 99.9% of time, break is used inside loops.
//
// continue is only possible from inside a loop


// ----------------- ASSIGNMENTS --------------------


// 1) postfix form

for( i = 0; i<5; i++) {
console.log(i);
}

// 2) prefix form

for(i = 0; i < 5 ; ++i){
	console.log(i)
}











































