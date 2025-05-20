// Immediately Invoked Function Expression(IFFE)


function chai(){
console.log(`CLASSIC FUNCTION`)
}

chai();	// termination is important otherwise it gives error



(function (){
console.log(`IFFE`)
})();

(function chai(val){
console.log(`WHO AM I? ${val}`)
})('Lord of The World');

((name) =>{
console.log(`My name is ${name}`)
})('Rishi');


































